import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Salads() {
  return (
    <div>
      <Base title={"SALADS"}></Base>
      <Heading />
      <Cards  name="Italian Chopped Salad" 
         type="Salads" 
         time="5 minutes" 
         ingredient='Lemon juice'
         ingredient1='Olive oil,salt,Lettuce,Red onions'
         ingredient2='Garlic'
         ingredient3='Oregano,chickpeas'
         ingredient4='Pepper,cheese'
         ingredient5='Shallot (finely chopped) '
         step=" In a small bowl, whisk together the olive oil, lemon juice, vinegar, shallot, garlic, oregano, salt, and pepper"
         step1="Cut the iceberg lettuce in half through the core, then cut out the core"
         step2="In a large bowl, combine the lettuce, tomatoes, chickpeas and mozzarella"
         step3="Drizzle with the dressing and toss gently to coat"
         step4="Season with salt and pepper and toss again"
         img= 'https://media.istockphoto.com/id/1438344655/photo/cowboy-caviar-is-traditional-mexican-vegetable-salad-in-bowl-with-ingredients-and-nachos-on.webp?b=1&s=170667a&w=0&k=20&c=PghQZCR4nS3umNNXwNLnpJbHzYR4T2j9o-TB9wBczBI='/>

         <Cards  name="Simple Green Salad" 
         type="Salads" 
         time="15 minutes" 
         ingredient='2 small heads of soft lettuce, butter lettuce '
         ingredient1='salt,cucumber'
         ingredient2='Lemon juice'
         ingredient3='Cheese,Microgreens,Avocado'
         ingredient4='½ cup raw almonds'
         ingredient5=' ½ tablespoon tamari'
         step="Preheat the oven to 350°F and line a baking sheet with parchment paper"
         step1="Place the almonds on the sheet and toss with tamari"
         step2="Bake for 10 to 14 minutes or until browned"
         step3="Add the cucumber, parmesan, pepitas, avocado, and tamari almonds"
         step4="Drizzle with more dressing and top with microgreens and salt"
         img= 'https://media.istockphoto.com/id/1305343256/photo/salad_and_bread.webp?b=1&s=170667a&w=0&k=20&c=0Hpq1yaXQQVCX5g_ZqK5hhy2Oqtj9g_RRQhGggg2oCM='/>
         
         <Cards  name="Crisp Apple Salad" 
         type="Salads" 
         time="10 minutes" 
         ingredient='1 crisp tart apple'
         ingredient1='8 cups mixed greens or tender lettuces'
         ingredient2='Cheese,salt'
         ingredient3='Maple syrup'
         ingredient4='Apple cider vinegar'
         ingredient5='Olive oil,pepper '
         step="In a medium bowl, whisk the maple syrup, vinegar, Dijon mustard, salt, and black pepper"
         step1="Whisk in the olive oil 1 tablespoon at a time until a creamy dressing forms"
         step2="Thinly slice the apple"
         step3="Toss the apples with lemon juice "
         step4="Top with apple slices, cheese and pomegranate seeds"
         img= 'https://media.istockphoto.com/id/598567824/photo/homemade-autumn-apple-walnut-spinach-salad.webp?b=1&s=170667a&w=0&k=20&c=iNeGWmOOg0fMGkm8vSrg0QVca_cTBIMVEm2AbqT0pNs='/>
  </div>
  )
}

export default Salads