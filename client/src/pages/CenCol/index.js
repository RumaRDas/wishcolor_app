import React from 'react'

function index(props) {
    return (

        <div className="columns is-mobile is-centered">
            <div className="column is-half">
               <div>{props}</div> 
            </div>
        </div>

    )
}

export default index;
