import React, {useState} from 'react'
import Base from '../Base/Base.jsx';
import {TextField,Button}from '@mui/material';


const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
   <Base title={"Login"}> 

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
    Login
</Button>
   </Base>
  )
}

export default Login;