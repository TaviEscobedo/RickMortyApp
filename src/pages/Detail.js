import React, {useEffect, useState}  from 'react'
import {useParams} from "react-router-dom"
import './Detail.css';

const Detail = () => {

  const {id}=useParams()
  
  const [personaje, setPersonaje] = useState({})

 const url="https://rickandmortyapi.com/api/character"

  const getCharacter=async()=>{
    const res= await fetch(`${url}/${id}`)
    const data =await res.json()
    setPersonaje(data)
    
  }

  useEffect(() => {
   getCharacter()
  }, [])
  
  return (
    <div className="container">
        <div className="detail">
          
            <div className="detailImg">
                <img src={personaje.image} alt="" className="image"/>
                <p className={`status ${personaje.status==="Alive"?"live":"dead"}`}>{personaje.status}</p>
            </div>
            <h1 className="detailName">{personaje.name}</h1>
            <div className="descriptions">
                <div className="pill"><strong>Especie: </strong>{personaje.species}</div>
               {personaje.type?<div className="pill"><strong>Tipo: </strong>{personaje.type}</div>:null} 
                <div className="pill"><strong>Género: </strong>{personaje.gender}</div>
                <div className="pill"><strong>Origen: </strong>{personaje?.origin?.name}</div>
                <div className="pill"><strong>Ubicación: </strong>{personaje?.location?.name}</div>
            </div>
            
        </div>

    </div>
  )
}

export default Detail