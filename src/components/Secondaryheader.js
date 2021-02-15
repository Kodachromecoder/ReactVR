import React, { Component } from 'react';



class Secondaryheader extends Component {
    render() {
        return (
            <div className="secondheader">
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
            </div>
        );
    }
}

export default Secondaryheader;