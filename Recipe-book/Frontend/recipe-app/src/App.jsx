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
import All from './Menu/All.jsx';
import Breakfast from './Menu/Breakfast.jsx';
import Cooldrinks from './Menu/Cooldrinks.jsx';
import Dessert from './Menu/Dessert.jsx';
import Dinner from './Menu/Dinner.jsx';
import Lunch from './Menu/Lunch.jsx';
import Mojitos from './Menu/Mojitos.jsx';
import Nonveg from './Menu/Nonveg.jsx';
import Vegmeals from './Menu/Vegmeals.jsx';
import Pasta from './Menu/Pasta.jsx';
import Salads from './Menu/Salads.jsx';
import Soups from './Menu/Soups.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <Route path="/recipes" element={<Recipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
          <Route path="/myrecipes" element={<Myrecipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
          <Route path="/add" element={<Addrecipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
          <Route path="/edit/:id" element={<Editrecipes userRecipes={userRecipes} setUserRecipes={setUserRecipes} />} />
          <Route path="/all" element={<All />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/cool drinks" element={<Cooldrinks />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/mojitos" element={<Mojitos />} />
          <Route path="/non-veg" element={<Nonveg />} />
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/veg-meals" element={<Vegmeals />} />
          </Routes>
          </BrowserRouter>
          </div>
    </>
  )
}

export default App
