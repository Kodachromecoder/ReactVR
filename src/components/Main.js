import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Gamecards from './Gamecards';



class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div className="main">
                <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/VR' component={Gamecards} />
                {/* Example: <Route exact path='/contactus' component={Contact} /> */}
{/*               <Route exact path='/' component={} /> */}
 {/*               <Route exact path='/' component={} /> */}
                <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;