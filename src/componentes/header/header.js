import React from 'react';

import logo from '../../assets/img/logo.png';

import { Navbar, Nav } from 'react-bootstrap';

//NavDropdown

class Header extends React.Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/"><img src={logo} width="120" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/restaurantes">Restaurantes</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/perfil">Perfil</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>    
        );
    }
}

export default Header ;