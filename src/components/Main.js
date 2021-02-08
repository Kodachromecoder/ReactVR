import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';



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
                <h1>THis is the switch. Located in the Main component.</h1>
                <Route path='/home' component={HomePage} />
                <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;