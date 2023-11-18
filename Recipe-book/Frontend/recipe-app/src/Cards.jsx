import React from 'react'
import Share from './Pages/Share.jsx';
import './styles/cards.css'
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <div className="cards" >
            
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.img} alt="Recipe"/>
      <Card.Body>
        <Card.Title>
        <h4 className='recipetitle'>Recipe Name: {props.name}</h4>
        
        </Card.Title>
        <Card.Text>
        <b>Recipe Category: {props.type}</b><br />
       <b>Preparation Time: {props.time}</b> 
        </Card.Text>
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
        <Share />
      </Card.Body>
    </Card>

    </div>
  )
}

export default Cards