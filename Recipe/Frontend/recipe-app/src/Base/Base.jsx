import React from 'react';
import {AppBar,Typography,Toolbar,IconButton,Avatar}from '@mui/material';

function Base({ title,children}) {
  return (
    <div>
        <header>
        <AppBar position="static">
  <Toolbar variant="dense">
  <Typography sx={{ mr: 2 }}>
     RECIPE_APP
    </Typography>
    <IconButton 
    edge="end" color="inherit" aria-label="Home" sx={{ mr: 2 }}>
      Home
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Recipes" sx={{ mr: 2 }}>
      Recipes
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="About" sx={{ mr: 2 }}>
     About
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Logout" sx={{ mr: 2 }}>
     Logout
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Login" sx={{ mr: 2 }}>
     Login
    </IconButton>
    <IconButton 
    edge="end" color="inherit" aria-label="Signup" sx={{ mr: 2 }}>
     Signup
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