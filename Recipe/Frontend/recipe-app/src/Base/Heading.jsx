import React from 'react'
import {useNavigate} from 'react-router-dom';

function Heading({title}) {
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='heading'>{title}</h1>
          <div className='back'>
          <button type="button" 
                   onClick={() =>navigate("/menus")} >
                   Back
           </button>
      </div>
    </div>
  )
}

export default Heading