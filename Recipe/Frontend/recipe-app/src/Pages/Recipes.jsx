import React, {useState,useEffect } from 'react'
import Base from '../Base/Base.jsx';
import { Paper,Typography,Button}from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Recipes(userRecipes,setUserRecipes) {

const [recipes,setRecipes] = useState([]);
const [err,setErr] = useState("");
const navigate = useNavigate();

useEffect(() =>{
const fetchData = async() =>{
  const res =await fetch("http://localhost:8000/api/recipes/all",{
    method:"GET",
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  const data = await res.json();
  if(!data.data){
    setErr(data.error);
  } else {
    setRecipes(data.data);
  }
};
fetchData();
},[]);


const handleDelete = async (id) => {
  const res = await fetch ('http://localhost:8000/api/recipes/user/delete/${id}', {
    method:"DELETE",
    headers: {
      "Content-Type":"application/json",
      "x-auth-token": localStorage.getItem("token"),
  },
}
  );
  const data = await res.json();
  const newUserRecipes = userRecipes.filter((data) => data.id!= id);
  setUserRecipes([...newUserRecipes]);
};

  return (
    <Base title={"All Recipes"} >
      <div className='app'>
        <Button 
        edge="end"
        color="primary"
        arial-label="Add-recipes"
        onClick={() => navigate("/add")}>Add Recipes</Button>
        <Button variant="contained" color="success"
    onClick={() =>navigate("/")} >
  Back
</Button>
      </div>
      {recipes && (
        <div>
          {recipes?.map((data) =>(
            <Paper elevation={6} key={data.id}>
            <h3>Recipe Name: {data.recipename}</h3>
             <h4>Recipe Type: {data.recipetype}</h4>
             <h4>Cooking Time: {data.timings}</h4>
             <h5>Ingredients: {data.ingredients} </h5>
             <h6>Steps: {data.steps}</h6>
             <p>Date: {data.date}</p>
             <p>Posted By: {data.user.username}</p>
             <Button onClick={() =>navigate("/edit/${data._id}")}>Edit</Button>
             <Button onClick={() => handleDelete (data._id)}>Delete</Button>
            </Paper>
          ))}
          {err ? <Typography color={"danger"}>{err}</Typography>:""}
        </div>
      )

      } 
      </Base>
  )
}

export default Recipes