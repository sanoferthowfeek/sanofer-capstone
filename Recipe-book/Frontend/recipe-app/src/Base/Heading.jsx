import React from 'react'
import {useNavigate} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../styles/heading.css'

function Heading({title}) {
    const navigate = useNavigate();
  
    return (

    <div className='cardheader'>
    {/* <h1 className='heading'>{title}</h1> */}
    <div className='back'>
    <button type="button" 
    onClick={() =>navigate("/menus")} >
    <ArrowBackIosIcon />
     Back
    </button>
    </div>
    </div>
  )
}

export default Heading