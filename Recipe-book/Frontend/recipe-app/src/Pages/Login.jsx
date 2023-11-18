import React, {useState} from 'react'
import Base from '../Base/Base.jsx';
import {TextField,Button, Typography}from '@mui/material';
import {useNavigate} from 'react-router-dom';
import '../styles/login.css'

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState("");
  const navigate = useNavigate();

const handleLogin = async () =>{
  
const payload ={
  email,
  password,
};
const res =await fetch('https://recipebooks-6ycq.onrender.com/api/user/login',{
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
<div className='login'>
<Base title={"Login"} > 
<div className='form'>
<TextField 
 fullWidth
label="Email" 
value={email} 
onChange={(e) => setEmail(e.target.value)}
sx={{ m:2}}
type="email" />

<TextField 
fullWidth
label="Password" 
value={password} 
onChange={(e) => setPassword(e.target.value)}
sx={{ m:2}}
type="password" />

<Button 
type="submit" 
variant="contained"
style={{backgroundColor:"#e91e63",color:"white"}}
onClick={handleLogin}>
Login
</Button>

{err ? <Typography color={"danger"}>{err}</Typography>:""}
</div>
</Base>
</div>
)
}

export default Login;