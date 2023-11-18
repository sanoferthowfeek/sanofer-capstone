import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';
function Cooldrinks() {
  return (
    <div>
      <Base title={"COOL DRINKS"}></Base>
      <Heading />
      <Cards  name="Fresh Berry Lemonade" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='1 lb. strawberries'
         ingredient1='1 c. sugar'
         ingredient2='2 c. Strawberry Simple Syrup'
         ingredient3='1 1/3 c. fresh lemon juice'
         ingredient4='Sliced strawberries and lemons, for serving'
         ingredient5=' Water'
         step="In large saucepan, combine strawberries, sugar, and 2 cups water "
         step1="Bring to a boil, stirring to dissolve sugar"
         step2="Reduce heat and simmer until berries turn pale and liquid is red, about 10 minutes"
         step3="Let syrup cool in saucepan 1 hour"
         step4="In pitcher, stir together Strawberry Simple Syrup, lemon juice, and 5 cups ice-cold water"
         img= 'https://media.istockphoto.com/id/1149345316/photo/pink-summer-drinks.webp?b=1&s=170667a&w=0&k=20&c=fQLxoAkViSsqiivIPPQiv1elU5qxB19rL6AMEI42yR8='/>

<Cards  name="Cucumber, Lemon, and Mint Fizz" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='8 bag black or green tea'
         ingredient1='4 sprig fresh mint'
         ingredient2='1 lemon'
         ingredient3='1/2 seedless cucumber'
         ingredient4='Water'
         ingredient5=' 4 c. ginger ale'
         step="Bring 4 cups water to a boil in a medium saucepan"
         step1="Remove from heat and add the tea bags, mint, and half the lemon"
         step2="Let steep, stirring twice, for 4 minutes"
         step3="Discard the tea bags and let the tea cool"
         step4="Discard the mint and lemon from the iced tea concentrate,Add ginger ale"
         img= 'https://media.istockphoto.com/id/1014785700/photo/sassy-diet-water-cucumber-lemon-mint-lemonade-in-glass-and-jar-on-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=GyqrK-PjRawlcXmVU__b4AtBCwEk-yxBC5mYr0MPtjg='/>

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
         step1="Scoop out fruit with a metal spoon"
         step2="Fill with watermelon limeade"
         step3="Replace lid"
         step4="Position on an iron stand or a bowl"
         img= 'https://media.istockphoto.com/id/1225801090/photo/watermelon-juice.webp?b=1&s=170667a&w=0&k=20&c=gE2TVFiFKtpNa1UqOs6yhvhFDxsqTTyLmx13PjS5hAU='/>


  </div>
  )
}

export default Cooldrinks