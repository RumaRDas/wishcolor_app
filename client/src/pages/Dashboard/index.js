import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import  './dashbord.css'
import moment from 'moment';

//Dashboard will show all events
const Dashboard = () => {
  const [gradients, setGradients] = useState([]);
  const user_id = localStorage.getItem('user');

  //  console.log(user_id)
  useEffect(() => {
    getGradients()

  }, [])

  const getGradients = async (filter) => {
    const url = filter ? `/dashboard/${filter}` : `/dashboard`
    const response = await api.get(url , { headers: { user_id } })
 setGradients(response.data)
  }

  //console.log(gradients)

return (

  <>
 <ul className="gradient-list">
 {
    gradients.map(gradient => (
      <li key={gradient._id}> 
    <header style={{ backgroundImage: `url(${gradient.thumbnail_url})`}}/>
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
  </>

)
}

export default Dashboard
