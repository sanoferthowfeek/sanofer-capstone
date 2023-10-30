import React from 'react';
import {AppBar,Typography,Toolbar,IconButton,Avatar}from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Base({ title,children}) {
  const navigate = useNavigate();

  const handleLogout = () => {
localStorage.removeItem("token");
navigate("/login");
  };

  return (
    <div>
        <header>
        <AppBar position="static">
  <Toolbar variant="dense">
  <Typography sx={{ mr: 2 }}>
     RECIPE_APP
    </Typography>
    <IconButton 
    edge="end" color="inherit" aria-label="Home" 
    onClick={() =>navigate("/")}
    sx={{ mr: 2 }}>
      Home
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Menus" 
    onClick={() =>navigate("/menus")}
    sx={{ mr: 2 }}>
      Menus
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="About" 
    onClick={() =>navigate("/about")}
    sx={{ mr: 2 }}>
     About
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Signup" 
    onClick={() =>navigate("/signup")}
    sx={{ mr: 2 }}>
     Signup
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Login" 
    onClick={() =>navigate("/login")}
    sx={{ mr: 2 }}>
     Login
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Logout" 
    onClick={handleLogout}
    sx={{ mr: 2 }}>
     Logout
    </IconButton>
    <Avatar src="/broken-image.jpg" />
  </Toolbar>
</AppBar>
 </header>
 <main>
  <h1>{title}</h1>
  <div className='content'>{children}</div>
 </main>
    </div>
  );
}

export default Base;