import React, { useState, useMemo } from 'react'
import api from '../../services/api';
import Container from '../Container';
import cameraIcon from '../../assets/camera.png'
import './style.css'


const EventsPage = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [color, setColor] = useState("");
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])



    const submitHandler = async (evt) => {
        evt.preventDefault();
        const user_id = localStorage.getItem('user');

        //   console.log(title,description, price, sport,date)
        const eventData = new FormData();
        eventData.append('thumbnail', thumbnail)
        eventData.append('color', color)
        eventData.append('title', title)
        eventData.append('price', price)
        eventData.append('description', description)
        eventData.append('date', date)

        if (
            title !== '' &&
            color !== '' &&
            price !== "" &&
            date !== "" &&
            thumbnail !== null &&
            description !== ''
            ){
                try{
                    await api.post("./gradient", eventData, {headers : { user_id}})  

                }catch(error){
                   console.log(error.message) 
                }
           
            }

       
        return ""
    }
    return (
        <div>
            <Container>
                <h1 className="eveHeader"> Create Your Event</h1>
                <div className="field">
                    <label className="label">Upload Your Image</label>
                    <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} className={thumbnail ? 'has-thumbnail' : ''}>
                        <div className="file is-info has-name">
                            <input className="file-input" type="file" onChange={evt => setThumbnail(evt.target.files[0])} />
                            <img src={cameraIcon} style={{ maxWidth: "50px" }} alt="upload img icon" />
                        </div>
                    </label>
                </div>

                <div className="field">
                    <label className="label">Color</label>
                    <div className="control">
                        <input className="input" id="Color" type="text" placeholder={'Color Name'} value={color} onChange={evt => setColor(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Event Name</label>
                    <div className="control">
                        <input className="input" id="title" type="text" placeholder={'Event Title'} value={title} onChange={evt => setTitle(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input is-success" type="Number" placeholder={' Event price $0.00'} value={price} id="price" onChange={evt => setPrice(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <input className="input is-success" type="date" placeholder={' Event Date'} value={date} id="date" onChange={evt => setDate(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" placeholder={'Event description'} value={description} id="description" onChange={evt => setDescription(evt.target.value)}></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={submitHandler}>Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light" type="submit">Cancel</button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default EventsPage;
