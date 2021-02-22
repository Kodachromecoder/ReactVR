import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Gamecards from './Gamecards';
import Menu from './Menuitem';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        const VRPage = () => {
            return (
                <Gamecards />
            );
        };

        const Menu = () => {
            return (
                <Menu />
            );
        };

        return (
            <div className="main">
                <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/VR' component={VRPage} />
                <Route exact path='/coffeefood' component={Menu} />
 {/*            <Route exact path='/event' component={} /> */}
 {/*             <Route exact path='/aboutus' component={} /> */}
                <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;