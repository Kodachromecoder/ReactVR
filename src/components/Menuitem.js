import React, { Component } from 'react';
import Secondaryheader from './Secondaryheader';


class Menu extends Component {
    render() {
        return (
            <div className="menuitem">
                <Secondaryheader />
                <h1>I'll be your menu items.</h1>
            </div>
        );
    }
}

export default Menu;