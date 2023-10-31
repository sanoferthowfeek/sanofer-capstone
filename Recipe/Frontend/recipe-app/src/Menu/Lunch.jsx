import React from 'react'
import Cards from '../Cards.jsx'
import {useNavigate} from 'react-router-dom';

function Lunch() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='heading'>LUNCH</h1>
      <div className='back'>
          <button type="button" 
              onClick={() =>navigate("/menus")} >
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