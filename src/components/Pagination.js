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
    <div class="pagination">
        {prev?<button onClick={handlePrev}>Anterior</button>:null}
        {next?<button onClick={handleNext}>Siguiente</button>:null}    
    </div>
  )
}

export default Pagination