import './App.css'
import React, {useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import Menus from './Pages/Menus.jsx'
import Signup from './Pages/Signup.jsx'
import Addrecipes from './Pages/Addrecipes.jsx'
import Editrecipes from './Pages/Editrecipes.jsx'
import Recipes from './Pages/Recipes.jsx'
import Myrecipes from './Pages/Myrecipes.jsx'


function App() {
const [userRecipes,setUserRecipes] = useState([]);
  return (
    <>
    <div className='app'>
   <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/myrecipes" element={<Myrecipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
          <Route path="/add" element={<Addrecipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
          <Route path="/edit/:id" element={<Editrecipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
        </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
