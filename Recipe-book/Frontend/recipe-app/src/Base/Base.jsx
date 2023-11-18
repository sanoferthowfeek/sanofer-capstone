import React from 'react';
import {useNavigate,NavLink} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppsIcon from '@mui/icons-material/Apps';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import '../styles/base.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';

function Base({ title,children}) {

const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("token");
navigate("/signup");
  };

return (
<div >
<Navbar collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Brand ><AppsIcon />RECIPE_BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() =>navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() =>navigate("/menus")}>Menus</Nav.Link>
            <Nav.Link 
            onClick={() =>navigate("/about")}>About</Nav.Link>
            <NavDropdown title="Register" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() =>navigate("/signup")}>
                Signup 
                <VpnKeyIcon /></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>navigate("/login")}>
                Login
                <LoginIcon />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recipes" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() =>navigate("/recipes")}><CollectionsBookmarkIcon /> All Recipes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>navigate("/myrecipes")}>
              <PageviewIcon />
                My Recipes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>navigate("/add")}>
              <AddToPhotosIcon />
                Add Recipes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>navigate("/edit/:id")}>
              <EditIcon /> 
                Edit Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}><LogoutIcon />Logout</Nav.Link>
           
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<main>
<h1 className='basehead'>{title}</h1>
<div className='content'>{children}</div>
</main>
</div>
);
}

export default Base;