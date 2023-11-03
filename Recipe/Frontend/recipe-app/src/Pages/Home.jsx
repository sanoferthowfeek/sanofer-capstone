import React from 'react'
import Base from '../Base/Base.jsx';
import Sidebar from '../Base/Sidebar.jsx'
import Footer from '../Base/Footer.jsx';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';

const Home = () => {
const navigate = useNavigate("/");

  useEffect(() =>{
    if (!localStorage.getItem("token")) {
      navigate("/login", {replace: true});
    }
  },[]);

  return (
<div className='home'>
<Base > 
<Sidebar/> 
<h1 className='homehead'><b>Welcome To Recipe App</b></h1><br />
<h2><b><i>Find Best Recipes For Cooking,Let's Cook.....</i></b></h2><br />
<h3><b><i>Learn Quick,Easy & Delicious Recipes...</i></b></h3><br />
<h4><b><i>Yummy.......<MoodRoundedIcon /></i></b></h4>
</Base>
<Footer />
</div>

  )
}

export default Home