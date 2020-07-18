import React from 'react'

//Dashboard will show all events
const Dashboard = () => {
    const user_id = localStorage.getItem('user');
    console.log(user_id)
    return (
        <div>
          <h1> Hello from Dashboard pages</h1> 
        </div>
    )
}

export default Dashboard
