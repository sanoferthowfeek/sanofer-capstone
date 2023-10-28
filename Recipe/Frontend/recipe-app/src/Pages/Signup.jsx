import React from 'react';
import Base from '../Base/Base.jsx';
import {TextField,Button}from '@mui/material';


const Signup = () => {
  return (
    <Base title={"Login"}> 

    <TextField 
    fullWidth 
    label="username" 
    value={"Username"} 
    sx={{ m:2}} 
    type="username" />

    <TextField 
    fullWidth 
    label="email" 
    value={"Email"} 
    sx={{ m:2}} 
    type="email" />
    
    <TextField 
    fullWidth 
    label="password" 
    value={"Password"} 
    sx={{ m:2}} 
    type="password" />
    
    <Button 
    type="submit" 
    variant="contained">
        SignUp
    </Button>
       </Base>
  )
}

export default Signup