import React, { useState } from 'react'
import api from '../../services/api';
import Container from '../Container';
import './style.css'


const EventsPage = () => {

    const user_id = localStorage.getItem('user');
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [thumbnail, setThumbnail] = useState("");

const submitHandler = async (evt) => {
    evt.preventDefault();
}
    return (
        <div>
            <Container>
                <h1 className="eveHeader"> Create Your Event</h1>

                <div className="field">
                    <label className="label">Event Name</label>
                    <div className="control">
                        <input className="input" id="title"type="text" placeholder="Event Name" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input is-success" type="Number" placeholder="$" value="bulma" id="price"/>
                    </div>
                </div>

                <div className="field">
                <label className="label">Upload Your Image</label>
                <div className="file is-info has-name">
                  <label className="file-label">
                    <input className="file-input" type="file" name="thumbnail" id="thumbnail" />
                    <span className="file-cta">
                    <span class="material-icons mr-4">
                    cloud_upload
                    </span>
                      <span className="file-label">
                       Image file…
                      </span>
                    </span>
                    <span className="file-name ">
                     No file choosen
                    </span>
                  </label>
                </div>
              </div>

                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Description" id="description"></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={submitHandler}>Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>



            </Container>
        </div>
    )
}

export default EventsPage;
