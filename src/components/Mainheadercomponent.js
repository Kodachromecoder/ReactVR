import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Jumbotron,
  } from 'reactstrap';
import indeximage from '../images/indeximage.jpg';
import { NavLink } from 'react-router-dom';


class Mainheader extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" className="space">
                    <div className="container">
                        <NavbarBrand to="/home">KCVR</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/VR">VR</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/coffeefood">Coffee/Food</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/event">Event Rental</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid style={{ backgroundImage: `url(${indeximage})`, backgroundSize: 'cover' }} fluid className="jumbo">
                        <h1 >Kansas City Virtual Reality Cafe</h1>
                </Jumbotron> 
            </React.Fragment>
        );
    }
}

export default Mainheader;