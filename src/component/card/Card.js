import React from 'react'
import  './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <img src={props.image} alt=''/>
            <h3>{props.titre}</h3>
            <h4>{props.prix}</h4>
            <p>{props.decription}</p>  
            <p>{props.decription2}</p>  
            <button>Commander</button>          
        </div>
    )
}

export default Card
