import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Dinner() {
  return (
   <div>
    <Base title={"DINNER"}></Base>
    <Heading />
    <Cards  name="Air-Fryer Grilled Cheese Sandwiches" 
         type="Sandwich" 
         time="10 minutes" 
         ingredient='8 slices whole-grain bread'
         ingredient1='Honey,olive oil'
         ingredient2='1 cup shredded Monterey Jack cheese'
         ingredient3='1 apple, cored and thinly sliced'
         ingredient4='2 cups arugula'
         ingredient5='½ cup shredded mozzarella cheese '
         step="Preheat air fryer to 400°F"
         step1="Arrange bread on a cutting board and brush one side of each slice with oil"
         step2="Layer Monterey Jack, apple, arugula and mozzarella evenly on 4 slices"
         step3="Cook, flipping once, until the cheese is melted, 4 to 5 minutes"
         step4="Top with the remaining 4 slices"
         img= 'https://media.istockphoto.com/id/1337916793/photo/stuffed-bell-peppers-made-by-air-frying-the-bell-peppers-stuffed-with-a-spicy-mixture-of.webp?b=1&s=170667a&w=0&k=20&c=R5BmmmpBuQF6dP_nhqotRwO1VI4NplkVoUhoVYo38fc='/>

         <Cards  name="Parotta" 
         type="Roti" 
         time="30 minutes" 
         ingredient='2 1/2 cup Maida flour'
         ingredient1='Egg'
         ingredient2='Salt as required'
         ingredient3='Water as required'
         ingredient4='1 tablespoon ghee'
         ingredient5=' Oil'
         step="Knead a smooth dough"
         step1="Take a large-sized bowl,Put two cups of flour along with a cup of water, salt and ghee in it"
         step2="Mix well and start kneading a dough"
         step3="Flatten the dough balls"
         step4="Put the dough balls on the pan and cook from both sides"
         img= 'https://media.istockphoto.com/id/1596274356/photo/fresh-homemade-chicken-roust-with-delicious-parotta.webp?b=1&s=170667a&w=0&k=20&c=RsgcyxRPLxe2dNADKbgfmJQZqxGnNlWnpcoayrQ8sNI='/>

         <Cards  name="Chappathi" 
         type="Roti" 
         time="30 minutes" 
         ingredient='2 1/2 cup whole wheat flour'
         ingredient1='Egg'
         ingredient2='Salt as required'
         ingredient3='Water as required'
         ingredient4='1 tablespoon ghee'
         ingredient5='Oil '
         step="Knead a smooth dough"
         step1="Take a large-sized bowl,Put two cups of flour along with a cup of water, salt and ghee in it"
         step2="Mix well and start kneading a dough"
         step3="Flatten the dough balls"
         step4="Put the chappati on the pan and cook from both sides"
         img= 'https://media.istockphoto.com/id/1458974926/photo/indian-traditional-cuisine-chapati-on-wooden-background.webp?b=1&s=170667a&w=0&k=20&c=pypfzqBlVzljwsgsGQfVXPAS-YM6u8Ma8-JkhtaqkUY='/>
  </div>
  )
}

export default Dinner