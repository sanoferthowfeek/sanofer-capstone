import React, {useState,useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { Button, TextField,Typography}from '@mui/material';
import Base from '../Base/Base.jsx';

function Editrecipes({userRecipes,setUserRecipes}) {

  const navigate = useNavigate();
  const[recipename,setRecipename] = useState("");
  const[recipetype,setRecipetype] = useState("");
  const[timings,setTimings] = useState("");
  const[ingredients,setIngredients] = useState("");
  const[steps,setSteps] = useState("");
  const [err,setErr] = useState("");
  const [msg,setMsg] = useState("");
  const {id} = useParams();

useEffect (() => {

},[]);

  
//api integration

async  function editNewRecipes(){
  const recipes ={
    recipename,
    recipetype,
    timings,
    ingredients,
    steps
  };
  const res = await fetch('http://localhost:8000/api/recipes/user/edit/${id}',{
    method:"PUT",
    body: JSON.stringify(recipes),
    headers: {
      "Content-Type":"application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  const data = await res.json();
  if(!data.data){
    setErr(data.error);
  } else {
    setUserRecipes([...userRecipes,data.data]);
    setMsg(data.msg)
  }
}

  return (
    <Base title={"Add Recipes"} >
      <div>
      <Button variant="contained" color="success"
    onClick={() =>navigate("/")} >
  Back
</Button>
      </div>
      <form>
        <TextField 
        fullWidth
        label="Recipe Name"
        variant="outlined"
        type="text" 
        value={recipename}
        onChange={(e) =>setRecipename(e.target.value)}
        sx={{m:2}}/>

<TextField 
        fullWidth
        label="Recipe Type"
        variant="outlined"
        type="text" 
        value={recipetype}
        onChange={(e) =>setRecipetype(e.target.value)}
        sx={{m:2}}/>

<TextField 
        fullWidth
        label="Cooking Time"
        variant="outlined"
        type="text" 
        value={timings}
        onChange={(e) =>setTimings(e.target.value)}
        sx={{m:2}}/>

<TextField 
        fullWidth
        label="Ingredients"
        variant="outlined"
        type="text" 
        value={ingredients}
        onChange={(e) =>setIngredients(e.target.value)}
        sx={{m:2}}/>

<TextField 
        fullWidth
        label="Steps"
        variant="outlined"
        type="text" 
        value={steps}
        onChange={(e) =>setSteps(e.target.value)}
        inputProps={{sx: {height:100}}}
        sx={{m:2}}/>

<Button type="submit" variant='contained'
onClick={editNewRecipes}>EditRecipes</Button>

{err ? <Typography color={"danger"}>{err}</Typography>:""}
{msg ? <Typography color={"success"}>{msg}</Typography>:""}
      </form>
    </Base>
  )
}

export default Editrecipes