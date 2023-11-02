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
    <div className='signup'>
    <Base title={"Signup"}> 
    <br/>
    <br />

    <TextField 
    
    label="username" 
    value={username} 
    onChange={(e) => setUserName(e.target.value)}
    sx={{ m:2}} 
    type="text" />

    <TextField 
  
    label="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    sx={{ m:2}} 
    type="email" />
    
    <TextField 
    
    label="password" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
    sx={{ m:2}} 
    type="password" />
    
    <Button 
    className='signbtn'
    type="submit" 
    variant="contained"
    style={{backgroundColor:"#e91e63",color:"white"}}
    onClick={handleSignup}
    >
    SignUp
    </Button>
    {err ? <Typography color={"danger"}>{err}</Typography>:""}
    </Base>
    </div>
  )
  }

export default Signup