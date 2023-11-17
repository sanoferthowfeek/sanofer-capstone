import React from 'react';
import {AppBar,Typography,Toolbar,IconButton}from '@mui/material';
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Base({ title,children}) {

const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("token");
navigate("/signup");
  };

return (
<div >
<header>
<AppBar position="static" style={{backgroundColor:"#f50057",color:"white"}}>
<Toolbar variant="dense">
<Typography sx={{ mr: 2 }}>
<AppsIcon />
RECIPE_BOOK
</Typography>

<IconButton 
edge="end" color="inherit" aria-label="Home" 
onClick={() =>navigate("/")}
sx={{ mr: 2 }}>
<HomeIcon />  Home
</IconButton>

<IconButton 
edge="end" color="inherit" aria-label="Menus" 
onClick={() =>navigate("/menus")}
sx={{ mr: 2 }}>
<MenuBookIcon />  Menus
</IconButton>

<IconButton 
edge="end" color="inherit" aria-label="About" 
onClick={() =>navigate("/about")}
sx={{ mr: 2 }}>
<InfoIcon />
About
</IconButton>

<IconButton 
edge="end" color="inherit" aria-label="Signup" 
onClick={() =>navigate("/signup")}
sx={{ mr: 2 }}>
<VpnKeyIcon />
Signup
</IconButton>

<IconButton 
edge="end" color="inherit" aria-label="Login" 
onClick={() =>navigate("/login")}
sx={{ mr: 2 }}>
<LoginIcon />
Login
</IconButton>

<IconButton 
edge="end" color="inherit" aria-label="Logout" 
onClick={handleLogout}
sx={{ mr: 2 }}>
<LogoutIcon />  Logout
</IconButton>

<AccountCircleIcon />
</Toolbar>
</AppBar>
</header>
<main>
<h1 className='basehead'>{title}</h1>
<div className='content'>{children}</div>
</main>
</div>
);
}

export default Base;