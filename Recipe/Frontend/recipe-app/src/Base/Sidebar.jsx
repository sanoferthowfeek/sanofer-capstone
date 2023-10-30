import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';


function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
        <div className='column'>
<div className='col-auto min-vh-50 bg-light'>
    <div className='nav'>
            <button type="submit" onClick={() =>navigate("/recipes")}> All Recipes</button>
            <button type="submit" onClick={() =>navigate("/myrecipes")}> My Recipes</button>
            <button type="submit" onClick={() =>navigate("/add")}>Add Recipes</button>
            <button type="submit" onClick={() =>navigate("/edit")}>Edit Recipes</button>
    </div>
</div>
        </div>
    </div>
  )
}

export default Sidebar