import React from 'react'
import Cards from '../Cards.jsx'


function Soups() {
  return (
    <div>
      <h1 className='heading'>SOUPS</h1>
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

export default Soups