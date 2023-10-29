import React from 'react'
import Cards from '../Cards.jsx'


function Cooldrinks() {
  return (
    <div>
      <h1 className='heading'>COOLDRINKS</h1>
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

export default Cooldrinks