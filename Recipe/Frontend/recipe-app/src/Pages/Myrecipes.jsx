import React, {useState,useEffect } from 'react'
import Base from '../Base/Base.jsx';
import { Paper,Typography,Button}from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function Myrecipes({userRecipes,setUserRecipes}) {

  const [err,setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() =>{
    const fetchData = async() =>{
      const res =await fetch("http://localhost:8000/api/recipes/user/all",{
        method:"GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if(!data.data){
        setErr(data.error);
      } else {
        setUserRecipes(data.data);
      }
    };
    fetchData();
    },[]);
    

  return (
    <div className='myrecipes'>
        <Base title={"My Recipes"} >
         <div className='allback'>
        <Button onClick={() =>navigate("/")}><ArrowBackIosNewIcon /> Back</Button>
      </div>
      <br />
      <br />
      <br />
      <br />
            {userRecipes && (
            <div>
            {userRecipes?.map((data) =>(
            <Paper elevation={6} key={data.id}>
            <h3>Recipe Name: {data.recipename}</h3>
             <h4>Recipe Type: {data.recipetype}</h4>
             <h4>Cooking Time: {data.timings}</h4>
             <h5>Ingredients: {data.ingredients} </h5>
             <h6>Steps: {data.steps}</h6>
             <p>Date: {data.date}</p>
             <p>Posted By: {data.user.username}</p>
             <p>Email: {data.user.email}</p>
            </Paper>
          ))}
          {err ? <Typography color={"danger"}>{err}</Typography>:""}
        </div>
      )
      } 
      </Base>
      </div>
  )
}

export default Myrecipes