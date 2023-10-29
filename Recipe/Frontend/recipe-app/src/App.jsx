import { useState } from 'react'
import './App.css'
import {Route,Link,Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import Recipes from './Pages/Recipes.jsx'
import Signup from './Pages/Signup.jsx'
import Addrecipes from './crud/Addrecipes.jsx'
import Editrecipes from './crud/Editrecipes.jsx'
import Savedrecipes from './crud/Savedrecipes.jsx'


function App() {

  return (
    <>
    <div className='app'>
        <Routes>
          <Route path='/' exact component={<Home />}></Route>
          <Route path='/about'  component={<About />}></Route>
          <Route path='/login' component={<Login />}></Route>
          <Route path='/recipes'  component={<Recipes />}></Route>
          <Route path='/signup'  component={<Signup />}></Route>
          <Route path='/addrecipes'  component={<Addrecipes />}></Route>
          <Route path='/editrecipes'  component={<Editrecipes />}></Route>
          <Route path='/savedrecipes'  component={<Savedrecipes />}></Route>
        </Routes>
    </div>
       
    </>
  )
}

export default App
