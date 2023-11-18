import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Dessert() {
  return (
    <div>
     <Base title={"DESSERT"}></Base>
     <Heading />
     <Cards  name="Rava Kesari" 
         type="Kesari" 
         time="10 minutes" 
         ingredient='1/2 cup rava, 1 and 1/2 cups water'
         ingredient1='Sugar,Ghee,Oil'
         ingredient2='A pinch kesari food color'
         ingredient3='15 cashewnuts,salt'
         ingredient4='10 raisins'
         ingredient5=' Cardamom powder'
         step="Add 1/4 cup ghee and heat it,add around 15 cashews,10 raisins to it"
         step1="Remove to a bowl and set aside,Add 1/2 cup rava in a sprinkled manner."
         step2="Heat 1 and 1/2 cups water along with 1/8 teaspoon salt and 5 strands saffron"
         step3="Add it to roasted rava,1 cup sugar"
         step4="Cook partially covered for 2 mins,Add 1/4 teaspoon cardamom powder, fried cashews, raisins along with 2 tablespoon refined oil(optional)"
         img= 'https://media.istockphoto.com/id/823328280/photo/plain-or-kesar-flavoured-semolina-halwa-sooji-ka-halwa-or-sweet-rava-sheera-or-shira-indian.webp?b=1&s=170667a&w=0&k=20&c=slnVoaJurWXLKwDNdrvnQWvOMu_ExviT1SyfrfDLD8w='/>

         <Cards  name="Oreo brownie slice" 
         type="Brownie" 
         time=" 30 minutes" 
         ingredient='200g dark chocolate,200g butter, chopped'
         ingredient1='1 1/2 cups caster sugar'
         ingredient2=' 4 eggs'
         ingredient3=' 1/3 cup cocoa powder'
         ingredient4='24 Oreo biscuits, 1 cup plain flour'
         ingredient5=' 6 x 23g packets mini Oreo biscuits, chopped' 
         step="Preheat oven to 190C/170C fan-forced"
         step1="Grease and line a 20cm x 30cm lamington pan with baking paper, extending paper 5cm above long sides"
         step2="Stir butter and chocolate in a medium saucepan over medium heat for 5 minutes or until smooth"
         step3="Remove from heat, Stir in sugar,Cool 10 minutes"
         step4="Add eggs, cocoa and flour. Stir to combine, Pour the batter into the prepared pan,bake it"
         img= 'https://media.istockphoto.com/id/1428496335/photo/cookies-and-cream-cake-with-dulce-de-leche.webp?b=1&s=170667a&w=0&k=20&c=xSbPnFIssjM5ZzGVVXrnoXsPjLqMmY6DhfzhtpXzLh0='/>

         <Cards  name="Agar Fruit Jelly" 
         type="Jelly" 
         time="10 minutes" 
         ingredient='Fruit Juice two flavour'
         ingredient1='Agar Agar / China Grass'
         ingredient2='Honey'
         ingredient3='Water'
         ingredient4='Food Colour'
         ingredient5='Nuts'
         step="Take agar agar in a bowl, add water and soak it for 10 mins"
         step1="Heat it gently till it is melted"
         step2="Add honey to it"
         step3="Heat till it is completely boiled"
         step4="Pour it over the moulds and set till completely se"
         img= 'https://media.istockphoto.com/id/483686806/photo/berry-fruit-jelly-with-fresh-berries-summer-dessert.webp?b=1&s=170667a&w=0&k=20&c=3lgP4XysZFLkjwtWNWLilLFSH54L3FXcI0oFrBQsT6Y='/>
  </div>
  )
}

export default Dessert