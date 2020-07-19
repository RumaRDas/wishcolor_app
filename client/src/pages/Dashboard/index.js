import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import  './dashbord.css'
import moment from 'moment';

//Dashboard will show all events
const Dashboard = () => {
  const [gradients, setGradients] = useState([]);
  const [ selected, setSelected] = useState(null);
  const user_id = localStorage.getItem('user');

  //  console.log(user_id)
  useEffect(() => {
    getGradients()

  }, [])

  const filterHandler = (query) => {
setSelected(query)
getGradients(query)

  }

  const getGradients = async (filter) => {
    const url = filter ? `/gradient/${filter}` : `/dashboard`
    const response = await api.get(url , { headers: { user_id } })
 setGradients(response.data)
  }

  //console.log(gradients)

return (

  <>
  <div> Filter:
  <div class="buttons">
  <button class="button is-danger" onClick = {()=> filterHandler(null)} active= {selected === null}>ALL Color</button>
  <button class="button is-success" onClick = {()=> filterHandler("red")} active= {selected === "red"}>Red</button>
  <button class="button is-info" onClick = {()=> filterHandler("blue")} active= {selected === "blue"}>Blue</button>
  <button class="button is-danger" onClick = {()=> filterHandler("black")} active= {selected === "black"}>Black</button>
</div>
  </div>
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
