import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Vegmeals() {
  return (
    <div>
      <Base title={"VEGETARIAN"}></Base>
      <Heading />
      <Cards  name="Potato Fry" 
         type="Vegetables" 
         time="10 minutes" 
         ingredient='2 Potatos large'
         ingredient1='Coriander powder,Turmeric powder'
         ingredient2='Salt,pepper,red chilli powder'
         ingredient3='Mustard'
         ingredient4='Curry leaves'
         ingredient5=' Water'
         step="Peel the skin of potato, wash, slice to equal sized rounds"
         step1="Chop the strips to cubes"
         step2="Heat a kadai with oil, splutter mustard, add curry leaves"
         step3="Add diced potato and cook for 2 mins"
         step4="Add 2 teaspoon red chilly powder,  ⅛ teaspoon turmeric, required salt"
         img= 'https://media.istockphoto.com/id/1042509866/photo/potato-curry.webp?b=1&s=170667a&w=0&k=20&c=QkPHFkl_NEXq6HYJ3TYMvQSS2SuqLP6eUf5OuUPTWAg='/>

         <Cards  name="Raw Banana Fry" 
         type="Vegetables" 
         time="15 minutes" 
         ingredient='2 raw bananas large'
         ingredient1='Coriander powder,Turmeric powder'
         ingredient2='Salt,pepper,red chilli powder'
         ingredient3='Mustard'
         ingredient4='Curry leaves'
         ingredient5='Water '
         step="Peel the skin of raw banana, wash, slice to equal sized rounds"
         step1="Chop it"
         step2="Heat a kadai with oil, splutter mustard, add curry leaves"
         step3="Add chopped raw banana and cook for 2 mins"
         step4="Add 2 teaspoon red chilly powder,  ⅛ teaspoon turmeric, required salt"
         img= 'https://media.istockphoto.com/id/163304234/photo/tempeh-stir-fry.jpg?s=612x612&w=0&k=20&c=SUSi3N4hfCkUGntJaMk87IcyOAho3yZtZQsTHC-61xQ='/>
         
         <Cards  name="Beans Fry" 
         type="Vegetables" 
         time="20 minutes" 
         ingredient='Beans'
         ingredient1='Coriander powder,Turmeric powder'
         ingredient2='Salt,pepper,red chilli powder'
         ingredient3='Mustard'
         ingredient4='Curry leaves'
         ingredient5='Water'
         step="Wash the beans"
         step1="Chop it"
         step2="Heat a kadai with oil, splutter mustard, add curry leaves"
         step3="Add chopped beans and cook for 2 mins"
         step4="Add 2 teaspoon red chilly powder,  ⅛ teaspoon turmeric, required salt"
         img= 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=600'/>
  </div>
  )
}

export default Vegmeals