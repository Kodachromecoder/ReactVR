import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,  } from 'reactstrap';

class MainNavbar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
           
            <Navbar className="navbar" dark sticky="top" expand="lg">
            
                <NavbarBrand className="mr-auto nav-link" href="/home">KCVR</NavbarBrand>
                <NavbarToggler className="mr-5" onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="justify-content-end text-right mt-0">
                        <NavItem>
                            <NavLink className="nav-link" to="/home">Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/VR">VR
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Food/Drink
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Event Rental
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        
        </Navbar> 
        
        );
    }
}

export default MainNavbar;