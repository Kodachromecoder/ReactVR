import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavLink, Jumbotron,
  } from 'reactstrap';
import indeximage from '../images/indeximage.jpg';


class Mainheader extends Component {

    render() {

        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" className="space">
                    <NavbarBrand to="/home">KCVR</NavbarBrand>
                    <Nav className="" navbar>
                        <NavItem className="">
                            <NavLink to="/VR">VR</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/coffeefood">Coffee/Food</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/event">Event Rental</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/aboutus">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Jumbotron style={{ backgroundImage: `url(${indeximage})`, backgroundSize: 'cover' }} fluid className="jumbo">
                        <h1 >Kansas City Virtual Reality Cafe</h1>
                </Jumbotron> 
            </React.Fragment>
        );
    }
}

export default Mainheader;