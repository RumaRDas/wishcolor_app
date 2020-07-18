import React from 'react'

const index = (props) => {
    return (
        <div>
        <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
        </div>
    )
}

export default index
