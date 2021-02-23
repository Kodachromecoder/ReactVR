import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Jumbotron,
  } from 'reactstrap';
import indeximage from '../images/indeximage.jpg';
import { NavLink } from 'react-router-dom';


class Mainheader extends Component {

    

    render() {

        return (
            <React.Fragment>
                <Jumbotron fluid style={{ backgroundImage: `url(${indeximage})`, backgroundSize: 'cover' }} fluid className="jumbo">
                        <h1 >Kansas City Virtual Reality Cafe</h1>
                </Jumbotron> 
            </React.Fragment>
        );
    }
}

export default Mainheader;