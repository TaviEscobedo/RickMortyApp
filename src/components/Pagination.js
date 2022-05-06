import React from 'react'
import './Pagination.css';

const Pagination = ({prev,next,onPrev,onNext}) => {
    const handlePrev=()=>{
        onPrev()
    }

    const handleNext=()=>{
        onNext()
    }
  return (
    <div className="pagination">
        <button onClick={handlePrev} className={`${prev===null && "disabled"}`}>Anterior</button>
        {/* {prev?<button onClick={handlePrev} className={`${prev===null && "disabled"}`}>Anterior</button>:null} */}
        {next?<button onClick={handleNext}>Siguiente</button>:null}    
    </div>
  )
}

export default Pagination