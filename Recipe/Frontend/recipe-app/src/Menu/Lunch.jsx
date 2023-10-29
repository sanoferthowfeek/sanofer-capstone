import React from 'react'
import Cards from '../Cards.jsx'


function Lunch() {
  return (
    <div>
      <h1 className='heading'>LUNCH</h1>
        <div className="input-item">
            <button
              className="back" type="button" 
              >
              Back
            </button>
          </div> 
         <Cards />
         <Cards />
         <Cards />
         <Cards />
         <Cards />
  </div>
  )
}

export default Lunch