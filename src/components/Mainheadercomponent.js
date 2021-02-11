import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Jumbotron,
  } from 'reactstrap';



class Mainheader extends Component {

    render() {

        return (
            <div className="mainheader container">
               <Navbar dark sticky="top">
                    <NavbarBrand href="/">KCVR</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="">VR</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="">Coffee/Food</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="">Event Rental</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Jumbotron fluid className="container jumbotron">
                    <div className="row">
                        <h1>Kansas City Virtual Reality Cafe</h1>
                            
                        
                    </div>
                </Jumbotron> 
            </div>
        );
    }
}

export default Mainheader;