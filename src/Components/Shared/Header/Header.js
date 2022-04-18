import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png';
import auth from '../../../firebase.init';

const Header = () => {
   const [user] = useAuthState(auth);

   const handleSignOut = () => {
      signOut(auth);
   }
   return (
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light" >
         <Container>
            <Navbar.Brand as={Link} to="/"><img src={logo} style={{ height: "30px" }} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
               </Nav>
               <Nav>
                  {
                     user ? <button className="btn btn-danger btn-sm" onClick={handleSignOut}>Sign Out</button> :
                        <Nav.Link as={Link} to="/login">
                           Login
                        </Nav.Link>
                  }
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;