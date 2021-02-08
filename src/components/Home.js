import React, { Component } from 'react';
import Mainheader from './Mainheadercomponent';



class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <Mainheader />
                <h1>This will be the home page.</h1>
            </div>
        );
    }
}

export default Home;