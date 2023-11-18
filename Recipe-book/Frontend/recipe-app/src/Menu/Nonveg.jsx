import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Nonveg() {
  return (
    <div>
      <Base title={"NON-VEGETARIAN"}></Base>
      <Heading />
      <Cards  name="Chicken-65" 
         type="Nonveg" 
         time="15 minutes" 
         ingredient='500 gm chicken'
         ingredient1='Coriander powder,Turmeric powder'
         ingredient2='Salt,pepper,red chilli powder'
         ingredient3='Curd'
         ingredient4='Curry leaves'
         ingredient5='Mustard oil '
         step="Take a bowl and mix chilli powder, coriander powder, turmeric powder, curd and salt together"
         step1="Marinate the chicken for 4-5 hours"
         step2="Shallow fry the marinated chicken"
         step3="Coat the cooked chicken in ketchup"
         step4="Enjoy your Chicken 65"
         img= 'https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.webp?b=1&s=170667a&w=0&k=20&c=HITbOFczH0g_HsKdnd4K_nJVeXw6grjEhgpnLzQZPSs='/>

         <Cards  name="Fish Fry" 
         type="Nonveg" 
         time="10 minutes" 
         ingredient='500 grams Fish '
         ingredient1='6 tbsp Coconut Oil'
         ingredient2='Coriander powder,Turmeric powder'
         ingredient3='Salt,pepper,red chilli powder'
         ingredient4='Curry leaves'
         ingredient5='Ginger Garlic Paste '
         step="Clean fish pieces, make deep slashes in it"
         step1="Mix all the ingredients for marination"
         step2="Apply masala all over the fish and marinate for 30 mins"
         step3="Heat coconut oil in a pan, place fish over it"
         step4="Cover it and cook on a high heat for 5 to 6 mins both the sides"
         img= 'https://media.istockphoto.com/id/980462262/photo/tasty-grilled-fish.webp?b=1&s=170667a&w=0&k=20&c=aZa46HjK0B65iExwZIcGnZ-SJ9r1eg4a90ttn5SWp7E='/>
         
         <Cards  name="Prawns Fry " 
         type="Nonveg" 
         time="20 minutes" 
         ingredient='2 lb Prawn'
         ingredient1='Curry leaves'
         ingredient2='Ginger Garlic Paste'
         ingredient3='Coriander powder,Turmeric powder'
         ingredient4='Salt,pepper,red chilli powder'
         ingredient5='Onions,Oil '
         step="In a bowl, add the cleaned prawns or shrimp "
         step1="Add salt, ginger garlic paste, turmeric, chili, coriander, and garam masala powder"
         step2="Mix everything well and rest it for about 15 minutes"
         step3="Now in pan with medium heat, pour oil and add onions"
         step4="Now add the marinated prawns and give a good mix"
         img= 'https://media.istockphoto.com/id/610264540/photo/cajun-shrimp.webp?b=1&s=170667a&w=0&k=20&c=bPTlvmcvpRGzwtvIdSo2W6_E1dLMge73yfysFVW6Xh8='/>
  </div>
  )
}

export default Nonveg