import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import '../styles/sidebar.css'


function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
    <div className='column'>
    <div className='nav'>
            <button type="submit" onClick={() =>navigate("/recipes")}> <CollectionsBookmarkIcon />  All Recipes</button>
            <button type="submit" onClick={() =>navigate("/myrecipes")}><PageviewIcon />  My Recipes</button>
            <button type="submit" onClick={() =>navigate("/add")}> <AddToPhotosIcon />  Add Recipes</button>
            <button type="submit" onClick={() =>navigate("/edit/:id")}><EditIcon />  Edit Recipes</button>
    </div>
    </div>
    </div>
  )
}

export default Sidebar