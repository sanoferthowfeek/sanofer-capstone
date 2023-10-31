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
             <h5>Recipe Type: {props.type}</h5>
             <h5>Cooking Time: {props.time}</h5>
            <ul> <h6>Ingredients: 
              <li>{props.ingredient} </li> 
            <li>{props.ingredient1}</li> 
            <li>{props.ingredient2}</li>
            <li>{props.ingredient3}</li> 
            <li>{props.ingredient4}</li> 
            <li>{props.ingredient5}</li> </h6></ul>
            <ul><h6>Steps: 
              <li>{props.step}</li>
              <li>{props.step1}</li>
              <li>{props.step2}</li>
              <li>{props.step3}</li>
              <li>{props.step4}</li>
              </h6></ul>
         </div>
     </div>
    </div>
  )
}

export default Cards