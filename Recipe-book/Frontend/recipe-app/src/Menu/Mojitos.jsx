import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Mojitos() {
  return (
    <div>
      <Base title={"MOJITOS"}></Base>
      <Heading />
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
         img= 'https://media.istockphoto.com/id/1253999472/photo/mojito-cocktail.webp?b=1&s=170667a&w=0&k=20&c=s3baSD_ql2iPXriDTIr19iIKqhuZUAoIUi9TacDJKOA='/>

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
         img= 'https://media.istockphoto.com/id/1254208272/photo/strawberry-lime-mojito-with-fresh-mint-and-ice-in-glass-jar.webp?b=1&s=170667a&w=0&k=20&c=4c3DdFXEeOQdwrBEgsCetXZFz1-Fo8DO6BE8cNS4daA='/>

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
         img= 'https://media.istockphoto.com/id/697523738/photo/blueberry-ice-sangria-with-mint-in-glasses.webp?b=1&s=170667a&w=0&k=20&c=hD5awJcghTte87E7tsj_uFcPls6zRDZz8Mt96AtRbVQ='/>
  </div>
  )
}

export default Mojitos