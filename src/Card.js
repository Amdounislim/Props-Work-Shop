import React from 'react'

export default function Card({name, email, image}) {
    return (
        <div className="card">
            <h3>Name : {name} </h3>
            <h3>Email : {email} </h3>
            <img src={image} className="img"></img>
        </div>
    )
}
