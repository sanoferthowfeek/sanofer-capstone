import React from 'react'
import Cards from '../Cards.jsx'
import Heading from '../Base/Heading.jsx';
import Base from '../Base/Base.jsx';

function Pasta() {
  return (
    <div>
     <Base title={"PASTA"}></Base>
     <Heading />
     <Cards  name="Creamy Tomato Pasta" 
         type="Pasta" 
         time="25 minutes" 
         ingredient='Unsalted butter,pasta,salt,oil'
         ingredient1='Onion,pepper'
         ingredient2='Tomato puree'
         ingredient3='Heavy cream'
         ingredient4=' Red pepper'
         ingredient5='Parmesan cheese '
         step="Melt butter,Add onion and cook, stirring occasionally"
         step1="Add tomatoes puree and bring to a boil over medium"
         step2="Cook pasta in salted water and drain it"
         step3="Stir cream, salt, black pepper, and crushed red pepper into tomato sauce"
         step4="Add cooked pasta and toss to coat"
         img= 'https://media.istockphoto.com/id/1439220365/photo/creamy-tomato-pasta.webp?b=1&s=170667a&w=0&k=20&c=cqxuqAhdhWn-i7iKR81DPYqL9PgwDTxBTMSvW61kTPQ='/>

         <Cards  name="Schezwan Pasta" 
         type="Pasta" 
         time="25 minutes" 
         ingredient='Unsalted butter,pasta,salt,oil'
         ingredient1='Onion,pepper'
         ingredient2='Tomatoes,schezwan sauce'
         ingredient3='Heavy cream'
         ingredient4='Red pepper'
         ingredient5=' Cheese'
         step="Melt butter,Add onion and cook, stirring occasionally"
         step1="Add tomatoes and bring to a boil over medium"
         step2="cook pasta in salted water and drain it"
         step3="Stir cream, salt, black pepper, and crushed red pepper into schezwan sauce"
         step4="Add cooked pasta and toss to coat"
         img= 'https://media.istockphoto.com/id/584495728/photo/vegetarian-vegetable-pasta-fusilli-with-zucchini-mushrooms-and-capers.webp?b=1&s=170667a&w=0&k=20&c=feemOJCkjSaRgVh-vk_Y6nq3s893IcvYSAMj2RNZkHc='/>
         
         <Cards  name="White Sauce Pasta" 
         type="Pasta" 
         time="30 minutes" 
         ingredient='Unsalted butter,pasta,salt,oil'
         ingredient1='Onion,pepper'
         ingredient2='Heavy cream'
         ingredient3='Broccoli'
         ingredient4='Red pepper'
         ingredient5='Cheese '
         step="Melt butter,Add onion and cook, stirring occasionally"
         step1="Add broccolis and bring to a boil over medium"
         step2="Cook pasta in salted water and drain it"
         step3="Stir cream, salt, black pepper, and crushed red pepper into cream sauce"
         step4="Add cooked pasta and toss to coat"
         img= 'https://media.istockphoto.com/id/1402719854/photo/creamy-pasta-with-mushroom-penne-pasta-with-mushrooms.webp?b=1&s=170667a&w=0&k=20&c=7pVyeNm368PSAtsMVfBUY_job00hjNC1Eptzq96P4sU='/>
  </div>
  )
}

export default Pasta