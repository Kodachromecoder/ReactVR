import React, { Component } from 'react';
import Secondaryheader from './Secondaryheader';



class Gamecards extends Component {
    render() {
        return (
            <div className="gamecard">
                <Secondaryheader />
                <h1>I'll be your game cards.</h1>
            </div>
        );
    }
}

export default Gamecards;