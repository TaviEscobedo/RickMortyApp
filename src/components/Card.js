import React from 'react'
import './Card.css';
const Card = ({char}) => {
   
  return (
      
    <div className="card ">
            <p className={`state ${char.status==="Alive"?"live":"dead"}`}>{char.status}</p>
            <img src={char.image} alt="" className="cardImg"/>
            <div className="cardName">
                <h2>{char.name}</h2>
            </div>
    </div>
  )
}

export default Card