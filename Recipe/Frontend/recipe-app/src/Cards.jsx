import React from 'react'

function Cards(props) {
  return (
    <div>
         <div className="cards">
       
       <div className="image_box">
             <img src= {props.img} alt="Recipe" />
         </div>
             <div className="details">
             <h3>Recipe Name: {props.name}</h3>
             <h4>Recipe Type: {props.type}</h4>
             <h4>Cooking Time: {props.time}</h4>
             <h5>Ingredients: {props.ingredient} </h5>
             <h6>Steps: {props.step}</h6>
         </div>
         
     </div>
    </div>
  )
}

export default Cards