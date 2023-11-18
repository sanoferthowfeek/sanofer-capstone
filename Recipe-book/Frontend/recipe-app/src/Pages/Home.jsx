import React from 'react'
import Base from '../Base/Base.jsx';
import Footer from '../Base/Footer.jsx';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import '../styles/home.css'

const Home = () => {
const navigate = useNavigate("/");

  useEffect(() =>{
  if (!localStorage.getItem("token")) {
  navigate("/signup", {replace: true});
    }
  },[]);

return (
 
   
<div className='home'>
<Base />
<h1 className='homehead'><b>Welcome To Recipe Book</b></h1><br />
<h2><b><i>Find Best Recipes For Cooking.....</i></b></h2><br />
<h3><b><i>Learn Easy & Delicious Recipes...</i></b></h3><br />
<h4><b><i>Yummy.......<MoodRoundedIcon /></i></b></h4>

<Footer />

</div>


)
}

export default Home