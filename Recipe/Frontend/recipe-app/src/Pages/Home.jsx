import React from 'react'
import Base from '../Base/Base.jsx';
import Sidebar from '../Base/Sidebar.jsx'
import Footer from '../Base/Footer.jsx';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';

const Home = () => {
const navigate = useNavigate("/");

  // useEffect(() =>{
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login", {replace: true});
  //   }
  // },[]);

  return (
<div className='home'>
<Base > 
<Sidebar/> 
<h1 className='homehead'><b>Welcome To Recipe App</b></h1>
<h4><i>Find Best Recipes For Cooking,Let's Cook.....</i></h4>
<h5><i>Learn Quick,Easy & Delicious Recipes...</i></h5>
<h6><i>Yummy.......<MoodRoundedIcon /></i></h6>
</Base>
<Footer />
</div>

  )
}

export default Home