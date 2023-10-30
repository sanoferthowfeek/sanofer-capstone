import React, {useState} from 'react';
import Base from '../Base/Base.jsx';
import {TextField,Button, Typography}from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [username,setUserName] =("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState("");
  const navigate = useNavigate();


  const handleSignup = async () =>{
  
    const payload ={
      username,
      email,
      password,
    };
    const res =await fetch('http://localhost:8000/api/user/signup',{
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
    });
    const data =await res.json();
    if(data.token) {
      localStorage.setItem("token",data.token);
      navigate("/");
    }else{
      setErr(data.error);
    }
      };


  return (
    
    <Base title={"Signup"}> 

    <TextField 
    fullWidth 
    label="username" 
    value={"Username"} 
    onChange={(e) => setUserName(e.target.value)}
    sx={{ m:2}} 
    type="text" />

    <TextField 
    fullWidth 
    label="email" 
    value={"Email"} 
    onChange={(e) => setEmail(e.target.value)}
    sx={{ m:2}} 
    type="email" />
    
    <TextField 
    fullWidth 
    label="password" 
    value={"Password"} 
    onChange={(e) => setPassword(e.target.value)}
    sx={{ m:2}} 
    type="password" />
    
    <Button 
    type="submit" 
    variant="contained"
    onClick={handleSignup}
    >
        SignUp
    </Button>
    {err ? <Typography color={"danger"}>{err}</Typography>:""}
       </Base>
  )
      }

export default Signup