import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Lunch() {
  return (
    <div>
      <Base title={"LUNCH"}></Base>
      <Heading />
      <Cards  name="Fried Rice" 
         type="Rice" 
         time="20 minutes" 
         ingredient='Baby carrots'
         ingredient1='Green peas'
         ingredient2='Vegetable oil,sesame oil'
         ingredient3='1 clove garlic, minced, or to taste'
         ingredient4='2 large eggs,soya sauce'
         ingredient5=' 3 cups leftover cooked white rice'
         step="Place carrots,peas in a small saucepan and cover with water"
         step1="Bring to a low boil and cook for 3 to 5 minutes"
         step2="Pour in vegetable oil, then stir in carrots, peas, and garlic,cook for about 30 seconds"
         step3="Add eggs and add soy sauce and toss rice to coat"
         step4="Stir in cooked rice,Drizzle with sesame oil and toss again"
         img= 'https://media.istockphoto.com/id/1137781555/photo/chinese-style-egg-fried-rice.webp?b=1&s=170667a&w=0&k=20&c=_zCozQdPsr-B6tEncXR2_ptT6l5G0Qkaw5v99n0hybQ='/>

         <Cards  name="Coconut Rice" 
         type="Rice" 
         time="20 minutes" 
         ingredient='1.5 cup cooked rice,coconut'
         ingredient1='Green chillies, red chilies'
         ingredient2='Chopped ginger,mustard seeds,cumin seeds,chana daal'
         ingredient3='Curry leaves,oil,salt'
         ingredient4='Asafoetida'
         ingredient5='Cashew nuts or peanuts '
         step="Heat 1 tablespoon of oil/ghee in a Kadai"
         step1="Add mustard, cumin seeds, dals, red chili, hing saute for 1 minute till dals turn light brown"
         step2="Add cashew nuts, green chilies, curry leaves, ginger"
         step3="Add freshly grated coconut, salt & saute it"
         step4="Add cooked rice and adjust salt, mix well"
         img= 'https://media.istockphoto.com/id/1163363805/photo/overhead-view-of-homemade-thai-green-curry-and-brown-basmati-rice-on-plate.webp?b=1&s=170667a&w=0&k=20&c=ZYiKKGxKc7167BAsZPZV33RedRYtWRS-B2699Y2E1NE='/>
         
         <Cards  name="Tomato Rice" 
         type="Rice" 
         time="20 minutes" 
         ingredient='1.5 cup cooked rice,tomatoes'
         ingredient1='Green chillies, red chilies'
         ingredient2='Chopped ginger,mustard seeds,cumin seeds,chana daal'
         ingredient3='Curry leaves,oil,salt'
         ingredient4='Asafoetida'
         ingredient5='Aashew nuts or peanuts'
         step="Heat 1 tablespoon of oil/ghee in a Kadai"
         step1="Add mustard, cumin seeds, dals, red chili, hing saute for 1 minute till dals turn light brown"
         step2="Add cashew nuts, green chilies, curry leaves, ginger"
         step3="Add freshly tomato puree, salt & saute it"
         step4="Add cooked rice and adjust salt, mix well"
         img= 'https://media.istockphoto.com/id/1161008165/photo/tomato-pulav-pilaf-made-using-basmati-rice-served-in-a-bowl-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=JwtVNKXEMRrE6KytN22QhUcohHh1bpdlFpt-qh_J8K0='/>
  </div>
  )
}

export default Lunch