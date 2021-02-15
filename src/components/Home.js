import React, { Component } from 'react';
import Photo from './photo';
import Text from './Textscroll';
import Mainheader from './Mainheadercomponent';



class Home extends Component {
    render() {

        return (
            <div className="homepage">
                <Mainheader />
                <Photo />
                <Text />
            </div>
        );
    }
}

export default Home;