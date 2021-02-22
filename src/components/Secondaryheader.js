import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Jumbotron, Container
  } from 'reactstrap';


class Secondaryheader extends Component {
    render() {
        return (
            <div className="">
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
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="headsets">Page Title</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Secondaryheader;