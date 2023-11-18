import React from 'react'
import Share from './Pages/Share.jsx';
import './styles/cards.css'

function Cards(props) {
  return (
    <div>
            <div className="cards">
            <div >
             <img  className="image_box" src= {props.img} alt="Recipe" />
             </div>
             <div className="details">
             <div className='recipetitle'><h3>Recipe Name: {props.name}</h3></div>
             <h5>Recipe Category: {props.type}</h5>
             <h5>Preparation Time: {props.time}</h5>
             <ul> <h6>Ingredients: 
            <li>{props.ingredient} </li> 
            <li>{props.ingredient1}</li> 
            <li>{props.ingredient2}</li>
            <li>{props.ingredient3}</li> 
            <li>{props.ingredient4}</li> 
            <li>{props.ingredient5}</li> </h6></ul>
            <ol><h6>Steps: 
            <li>{props.step}</li>
            <li>{props.step1}</li>
            <li>{props.step2}</li>
            <li>{props.step3}</li>
            <li>{props.step4}</li>
            </h6></ol>
            
            <div>
            <Share />
            </div>
            </div>
           </div>
    </div>
  )
}

export default Cards