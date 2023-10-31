import React from 'react'
import Cards from '../Cards.jsx'
import {useNavigate} from 'react-router-dom';

function All() {
  const navigate = useNavigate();
 
  return (
    <div>
    <h1 className='heading'>ALL RECIPES</h1>
    <div className='back'>
          <button type="button" 
              onClick={() =>navigate("/menus")} >
              Back
            </button>
      </div>
              <Cards />
         
             
      </div>
      )
    }
    
  
 

export default All