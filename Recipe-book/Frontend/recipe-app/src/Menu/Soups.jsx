import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Soups() {
  return (
    <div>
      <Base title={"SOUPS"}></Base>
      <Heading />
      <Cards  name="Cream of Mushroom Soup" 
         type="Soup" 
         time="30 minutes" 
         ingredient='2 medium leeks, white and light green parts, chopped '
         ingredient1='Salt,pepper,olive oils'
         ingredient2='Mushroom chopped'
         ingredient3='Garlic cloves,Cauliflower'
         ingredient4='Full-fat coconut milk'
         ingredient5='Nuts '
         step="Heat the oil in a large pot or Dutch oven over medium heat"
         step1="Add the leeks, celery, and ¼ teaspoon salt and cook 5 minutes"
         step2="Add the broth and the cauliflower"
         step3="Simmer uncovered for 20 minutes, or until the cauliflower is very soft and blend"
         step4="Season to taste"
         img= 'https://media.istockphoto.com/id/1433783699/photo/mushroom-soup-with-bread-and-fresh-mushrooms-autumn-seasonal-cream-soup-with-vegetables.webp?b=1&s=170667a&w=0&k=20&c=QtHuGK-VgOYSkVgG21b2tLXhNzyPBm41JL5z4JFovIQ='/>

         <Cards  name="Tomato Soup" 
         type="Soups" 
         time="25 minutes" 
         ingredient='Tomatoes,onions'
         ingredient1='Salt,pepper,olive oils'
         ingredient2='Garlic cloves'
         ingredient3='Water'
         ingredient4='Vegetables'
         ingredient5=' Corn flour'
         step="Heat the oil in a large pot or Dutch oven over medium heat"
         step1="Add the water and allow to boil"
         step2="Add the vegetables,garlic cloves,tomatoes,onions and salt"
         step3="Mix the corn flour"
         step4="Stir occasionally to cook"
         img= 'https://media.istockphoto.com/id/1323137584/photo/close-up-of-indian-homemade-fresh-and-healthy-tomato-soup-garnished-with-fresh-coriander.webp?b=1&s=170667a&w=0&k=20&c=FvSMdc34JnNj0CBGMcoqkOrz0BAba8nmfKoceZpaqrU='/>
         
         <Cards  name="Vegetable Soup" 
         type="Soup" 
         time="30 minutes" 
         ingredient='Tomatoes,onions'
         ingredient1='Garlic cloves'
         ingredient2='Salt,pepper,olive oils'
         ingredient3='Water'
         ingredient4='Corn flour'
         ingredient5='Cauliflower,beans,peas '
         step="Heat the oil in a large pot or Dutch oven over medium heat"
         step1="Add the water and allow to boil"
         step2="Add the Cauliflower,beans,peas,garlic cloves,tomatoes,onions and salt"
         step3="Mix the corn flour"
         step4="Stir occasionally to cook"
         img= 'https://media.istockphoto.com/id/1092632832/photo/vegetable-soup.webp?b=1&s=170667a&w=0&k=20&c=y7TLFJFEFSToHhcXuPRW5nVh8u2QT45zuMXp0oEbfXo='/>
  </div>
  )
}

export default Soups