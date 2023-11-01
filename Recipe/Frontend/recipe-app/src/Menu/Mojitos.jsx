import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';

function Mojitos() {
  return (
    <div>
      <Heading title={"MOJITOS"}></Heading>
      <Cards  name="Mint Mojito" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='1 ounce fresh lime juice'
         ingredient1='5 mint leaves, more for garnish'
         ingredient2='½ ounce simple syrup'
         ingredient3='Ice cubes'
         ingredient4='Lime slices, for garnish'
         ingredient5='Soda or Water '
         step="Lightly muddle the mint in the bottom of a cocktail shaker until aromatic"
         step1="Add the lime juice, simple syrup, a handful of ice and shake"
         step2="Strain into a glass filled with ice"
         step3="Top with a splash of club soda "
         step4="Garnish with lime slices and more mint"
         img= ''/>

<Cards  name="Strawberry Mojito" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='1 ounce fresh strawberry juice'
         ingredient1='5 mint leaves, more for garnish'
         ingredient2='½ ounce simple syrup'
         ingredient3='Ice cubes'
         ingredient4='Strawberry slices, for garnish'
         ingredient5=' Soda or Water'
         step="Lightly muddle the mint in the bottom of a cocktail shaker until aromatic"
         step1="Add the strawberry juice, simple syrup, a handful of ice and shake"
         step2="Strain into a glass filled with ice"
         step3="Top with a splash of club soda"
         step4="Garnish with strawberry slices and more mint"
         img= ''/>
         <Cards  name="BlueBerry Mojito" 
         type="Drinks" 
         time="5 minutes" 
         ingredient='1 ounce fresh blueberry juice'
         ingredient1='5 mint leaves, more for garnish'
         ingredient2='½ ounce simple syrup'
         ingredient3='Ice cubes'
         ingredient4='Blueberry slices, for garnish'
         ingredient5='Soda or Water '
         step="Lightly muddle the mint in the bottom of a cocktail shaker until aromatic"
         step1="Add the blueberry juice, simple syrup, a handful of ice and shake"
         step2="Strain into a glass filled with ice"
         step3="Top with a splash of club soda"
         step4="Garnish with blueberry slices and more mint"
         img= ''/>
  </div>
  )
}

export default Mojitos