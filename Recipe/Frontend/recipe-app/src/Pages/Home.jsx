import React from 'react'
import Base from '../Base/Base.jsx';
import Sidebar from '../Base/Sidebar.jsx'
import Footer from '../Base/Footer.jsx';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
const navigate = useNavigate("/");

  // useEffect(() =>{
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login", {replace: true});
  //   }
  // },[]);

  return (
<div>
<Base > 
<Sidebar/> 
<h1>Welcome To Recipe App</h1>
<h4>Find Best Recipes For Cooking,Let's Cook.....</h4>
<h5>Learn Quick Easy & Delicious Recipes...</h5>
<h6>Yummy.......</h6>
</Base>
<Footer />
</div>

  )
}

export default Home