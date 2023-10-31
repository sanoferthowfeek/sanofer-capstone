import React from 'react'
import Cards from '../Cards.jsx'
import {useNavigate} from 'react-router-dom';


function Breakfast() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='heading'>BREAKFAST</h1>
          <div className='back'>
          <button type="button" 
              onClick={() =>navigate("/menus")} >
              Back
            </button>
      </div>
         <Cards  name="Yogurt Toast" 
         type="Yogurt" 
         time="20 minutes" 
         ingredient='1/2 c. blueberries, plus more for sprinkling'
         ingredient1='1 tbsp. honey'
         ingredient2='1/2 tsp. pure vanilla extract'
         ingredient3='1 large egg,4 slices bread'
         ingredient4='Kosher salt'
         ingredient5=' 1 (6- to 7-oz.) container plain or vanilla Greek yogurt'
         step="Heat oven to 400˚F"
         step1="In a large bowl, coarsely mash blueberries with honey and vanilla"
         step2="Add yogurt,egg and mix to combine"
         step3="Place bread on a rimmed baking sheet and spoon yogurt mixture on top, pushing it to the edges without letting it spill over. Sprinkle with additional blueberries and a pinch of salt"
         step4="Bake until the yogurt on top is just set, 12 to 15 min"
         img='https://media.istockphoto.com/id/931198864/photo/french-toasts-with-yogurt-and-strawberries-for-breakfast.webp?b=1&s=170667a&w=0&k=20&c=Sp_8BO897R53iTuJpZxP6Wa7tFszltYFD1PkSTn9KAc='/>
         
         <Cards  name="Yogurt Toast" 
         type="Yogurt" 
         time="20 minutes" 
         ingredient='1/2 c. blueberries, plus more for sprinkling'
         ingredient1='1 tbsp. honey'
         ingredient2='1/2 tsp. pure vanilla extract'
         ingredient3='1 large egg,4 slices bread'
         ingredient4='Kosher salt'
         ingredient5=' 1 (6- to 7-oz.) container plain or vanilla Greek yogurt'
         step="Heat oven to 400˚F"
         step1="In a large bowl, coarsely mash blueberries with honey and vanilla"
         step2="Add yogurt,egg and mix to combine"
         step3="Place bread on a rimmed baking sheet and spoon yogurt mixture on top, pushing it to the edges without letting it spill over. Sprinkle with additional blueberries and a pinch of salt"
         step4="Bake until the yogurt on top is just set, 12 to 15 min"
         img= ''/>
        
         <Cards  name="Yogurt Toast" 
         type="Yogurt" 
         time="20 minutes" 
         ingredient='1/2 c. blueberries, plus more for sprinkling'
         ingredient1='1 tbsp. honey'
         ingredient2='1/2 tsp. pure vanilla extract'
         ingredient3='1 large egg,4 slices bread'
         ingredient4='Kosher salt'
         ingredient5=' 1 (6- to 7-oz.) container plain or vanilla Greek yogurt'
         step="Heat oven to 400˚F"
         step1="In a large bowl, coarsely mash blueberries with honey and vanilla"
         step2="Add yogurt,egg and mix to combine"
         step3="Place bread on a rimmed baking sheet and spoon yogurt mixture on top, pushing it to the edges without letting it spill over. Sprinkle with additional blueberries and a pinch of salt"
         step4="Bake until the yogurt on top is just set, 12 to 15 min"
         img=""/>
         
  </div>
  )
}

export default Breakfast