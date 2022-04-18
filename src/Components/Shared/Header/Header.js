import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png';

const Header = () => {
   return (
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light" >
         <Container>
            <Navbar.Brand as={Link} to="/"><img src={logo} style={{ height: "30px" }} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link href="/#services">Services</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
               </Nav>
               <Nav>
                  <Nav.Link as={Link} to="/login">
                     Login
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;