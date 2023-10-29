import React from 'react'
import Base from '../Base/Base.jsx';
import Sidebar from '../Base/Sidebar.jsx'
import Footer from '../Base/Footer.jsx';
const Home = () => {
  return (
    <div>
<Base title={"Welcome To Recipe App"}> 
<Sidebar/> 
<h2>Find Best Recipes For Cooking,Let's Cook.....</h2>
<h4>Learn Quick Easy & Delicious Recipes...</h4>
<h5>Yummy.......</h5>
</Base>
<Footer />
</div>

  )
}

export default Home