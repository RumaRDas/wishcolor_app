import React, { useState, useEffect } from 'react';
import api from '../../services/api';

//Dashboard will show all events
const Dashboard = () => {
  const [gradients, setGradients] = useState([]);
  const user_id = localStorage.getItem('user');

  //  console.log(user_id)
  useEffect(() => {
    getGradients()

  }, [])

  const getGradients = async (filter) => {
    const url = filter ? `/gradient/${filter}` : `/dashboard`
    const response = await api.get(url , { headers: { user_id } })
 setGradients(response.data)
  }

  //console.log(gradients)

return (
  <div>
 <ul className="gradient-list">
 {
    gradients.map(gradient => (
      <li key={gradient._id}> 
    <header style={{ backgroundImage: `url(${gradient.thumbnail_url})`}}/>
    <strong>{gradient.title}</strong>
    <span>{gradient.color}</span>
    <span>{gradient.price}</span>
    <span>{gradient.description}</span>
    <span>{gradient.date}</span>
      
      </li>
 )
 )
 }
 
 </ul>
  </div>
)
}

export default Dashboard
