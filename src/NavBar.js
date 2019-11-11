import React from 'react'

export default function NavBar(props) {
    const {title} = props
    return (
        <div className="nav">
            <h1>{title}</h1>
        </div>
    )
}



