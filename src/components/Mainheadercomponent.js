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
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" className="space">
                    <NavbarBrand href="/">KCVR</NavbarBrand>
                    <Nav className="" navbar>
                        <NavItem className="">
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
                <Jumbotron fluid className="jumbo">
                        <h1 >Kansas City Virtual Reality Cafe</h1>
                </Jumbotron> 
            </React.Fragment>
        );
    }
}

export default Mainheader;