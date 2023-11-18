import React, {useState,useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { Button, TextField,Typography}from '@mui/material';
import Base from '../Base/Base.jsx';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../styles/edit.css'


function Editrecipes({userRecipes,setUserRecipes}) {

  const navigate = useNavigate();
  const[recipename,setRecipename] = useState("");
  const[recipetype,setRecipetype] = useState("");
  const[timings,setTimings] = useState("");
  const[ingredients,setIngredients] = useState("");
  const[steps,setSteps] = useState("");
  const [err,setErr] = useState("");
  const [msg,setMsg] = useState("");
  const[comments,setComments] = useState("");
  const {id} = useParams();

useEffect (() => {
  console.log(id);
const data = userRecipes.find((data) =>data._id.toString() == id) 
console.log(data);
console.log(userRecipes);
if(data){
  setRecipename(data.recipename)
  setRecipetype(data.recipetype)
  setTimings(data.timings)
  setIngredients(data.ingredients)
  setSteps(data.steps)
}
},[id,userRecipes]);

  
//api integration

async  function editNewRecipes(){
  const recipes ={
    recipename,
    recipetype,
    timings,
    ingredients,
    steps
  };
  const res = await fetch(`https://recipebooks-6ycq.onrender.com/api/recipes/user/edit/${id}`,{
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
    const editableIndex = userRecipes?.findIndex((data) =>data._id === id);
    userRecipes[editableIndex] = data.data;
    await setUserRecipes ([...userRecipes]);
    setMsg(data.message);
  }
}

  return (
    <div className='editrecipes'>
    <Base title={"Edit Recipes"} >
    <div className='allback'>
    <Button onClick={() =>navigate("/")}><ArrowBackIosNewIcon /> Back</Button>
    </div>
    <form className='form'>
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


<TextField 
        fullWidth
        label="Comments"
        variant="outlined"
        type="text" 
        value={comments}
        onChange={(e) =>setComments(e.target.value)}
        sx={{m:2}}/>        

<Button type="submit" variant='contained'
style={{backgroundColor:"#512da8",color:"white"}}
onClick={editNewRecipes}>
EditRecipes</Button>

{err ? <Typography color={"danger"}>{err}</Typography>:""}
{msg ? <Typography color={"success"}>{msg}</Typography>:""}
</form>
</Base>
</div>
  )
}

export default Editrecipes