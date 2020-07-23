import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './dashbord.css'
import moment from 'moment';

//Dashboard will show all events
const Dashboard = ({ history }) => {
  const [gradients, setGradients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false)
  const [success, SetSuccess] = useState(false);
  const user_id = localStorage.getItem('user');

  //  console.log(user_id)
  useEffect(() => {
    getGradients()

  }, [])

  const filterHandler = (query) => {
    setSelected(query)
    getGradients(query)

  }

  const myeventsHandler = async () => {
    setSelected("myevents")
    const response = await api.get(`/user/gradients`, { headers: { user_id } })
    setGradients(response.data)
  }

  const deleteEventHandler = async (gradientId) => {
    try {

      const deleteGradient = await api.delete(`/gradient/${gradientId}`)
      SetSuccess(true)
      setTimeout(() => {
        SetSuccess(false)
        filterHandler(null)
      }, 2500)
    } catch (error) {

      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
    }

  }

  const getGradients = async (filter) => {
    const url = filter ? `/gradient/${filter}` : `/dashboard`
    const response = await api.get(url, { headers: { user_id } })

    setGradients(response.data)
  }

  //console.log(gradients)

  return (

    <>
      <div className="filter-panel">
        <div className="buttons field has-addons ">
          <button className="button is-warning" onClick={() => filterHandler(null)} active={selected === null}>ALL Color</button>
          <button className="button is-danger" onClick={myeventsHandler} active={selected === "myevents"}>My Gradieny</button>
          <button className="button is-success" onClick={() => filterHandler("red")} active={selected === "red"}>Red</button>
          <button className="button is-info" onClick={() => filterHandler("blue")} active={selected === "blue"}>Blue</button>
          <button className="button is-danger" onClick={() => filterHandler("black")} active={selected === "black"}>Black</button>
        </div>
        <button className="button is-dark" onClick={() => history.push("/gradient")} >Back</button>
      </div>
      <div>
        <ul className="gradient-list">
          {
            gradients.map(gradient => (
              <li key={gradient._id}>
                <header style={{ backgroundImage: `url(${gradient.thumbnail_url})` }} className="deletBtn">
                  {
                    gradient.user === user_id ?
                      <div>
                        <button className="button is-danger is small" onClick={() => deleteEventHandler(gradient._id)}>Delete</button>
                      </div>
                      : ""
                  }
                </header>
                <strong>{gradient.title}</strong>
                <span>Gradient Date: {moment(gradient.date).format('MMMM Do YYYY')}</span>
                <span> Gradient Top:{gradient.color}</span>
                <span> gradient price: {parseFloat(gradient.price).toFixed(2)}</span>
                <span>{gradient.description}</span>
                <button className="button is-small is-dark ">Subscribe</button>


              </li>
            )
            )
          }

        </ul>
        {error ? (
          <div className="notification is-danger is-light event-validation"> Error when deleting Gradient</div>
        ) : ''}
        {success ? (
          <div className="notification is-success is-light event-validation"> Deleted successfuly</div>
        ) : ''}
      </div>
    </>

  )
}

export default Dashboard
