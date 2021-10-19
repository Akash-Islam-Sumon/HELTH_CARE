import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   const{allContext}= useAuth()
   const {user,logOut} =allContext

    return (
   <div>
      <Navbar className="header" expand="lg ">
          <Container>
                <Navbar.Brand href="#home"><img src={'https://i.ibb.co/0FXybDt/hospital-logo1.png'} alt="logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
               <Nav.Link as ={NavLink} className="text-white" to="/home">HOME</Nav.Link>
               <Nav.Link as ={NavLink} className="text-white" to="/services">SERVICES</Nav.Link>
               <Nav.Link as ={NavLink} className="text-white" to="/specialists">SPECIALISTS</Nav.Link>
               <Nav.Link as ={NavLink} className="text-white" to="/gallery">GALLERY</Nav.Link>
               <Nav.Link as ={NavLink} className="text-white" to="/contacts">CONTACT US</Nav.Link>
               <Nav.Link as ={NavLink} className="text-white" to="/about">ABOUT US</Nav.Link>
                <Nav.Link as ={NavLink} className="text-white" to="/register">REGISTER</Nav.Link>
                <Nav.Link as={NavLink} className="text-white " to="/login">{user.displayName }</Nav.Link>
                {user.email ?
                  <Button onClick={logOut} variant="light">LogOut</Button> :
                  // <Button variant="light">Log In</Button>
                  ( <Nav.Link as ={NavLink} className="text-white" to="/login">LOG IN</Nav.Link>)

                  // <Nav.Link as ={NavLink} className="text-white" to="/login">LOG IN</Nav.Link>
                 }
    
             </Nav>   </Navbar.Collapse>
          </Container>
        </Navbar>
    
      </div>
    );
};

export default Header;