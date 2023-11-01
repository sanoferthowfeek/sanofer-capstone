import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';

function Cooldrinks() {
  return (
    <div>
      <Heading title={"COOL DRINKS"}></Heading>
      <Cards  name="Fresh Berry Lemonade" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='1 lb. strawberries'
         ingredient1='1 c. sugar'
         ingredient2='2 c. Strawberry Simple Syrup'
         ingredient3='1 1/3 c. fresh lemon juice'
         ingredient4='Sliced strawberries and lemons, for serving'
         ingredient5=' water'
         step="In large saucepan, combine strawberries, sugar, and 2 cups water "
         step1="Bring to a boil, stirring to dissolve sugar"
         step2="Reduce heat and simmer until berries turn pale and liquid is red, about 10 minutes"
         step3="Let syrup cool in saucepan 1 hour"
         step4="In pitcher, stir together Strawberry Simple Syrup, lemon juice, and 5 cups ice-cold water"
         img= ''/>

<Cards  name="Cucumber, Lemon, and Mint Fizz" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='8 bag black or green tea'
         ingredient1='4 sprig fresh mint'
         ingredient2='1 lemon'
         ingredient3='1/2 seedless cucumber'
         ingredient4='water'
         ingredient5=' 4 c. ginger ale'
         step="Bring 4 cups water to a boil in a medium saucepan"
         step1="Remove from heat and add the tea bags, mint, and half the lemon"
         step2="Let steep, stirring twice, for 4 minutes"
         step3="Discard the tea bags and let the tea cool"
         step4="Discard the mint and lemon from the iced tea concentrate,Add ginger ale"
         img= ''/>

<Cards  name="Watermelon Limeade " 
         type="Drinks" 
         time="5 minutes" 
         ingredient='1 1/4 c. fresh lime juice'
         ingredient1='16 c. seedless watermelon pieces'
         ingredient2='Ginger ale'
         ingredient3='Water'
         ingredient4='Watermelon puree'
         ingredient5='Ice cubes'
         step="Using a paring knife and working at an angle, cut around one end of watermelon to create a lid "
         step1="scoop out fruit with a metal spoon"
         step2="Fill with watermelon limeade"
         step3="replace lid"
         step4="position on an iron stand or a bowl"
         img= ''/>


  </div>
  )
}

export default Cooldrinks