import React, { Component } from 'react';
import Photo from './photo';
import Text from './Textscroll';
import Mainheader from './Mainheadercomponent';



class Home extends Component {
    render() {

        return (
            <div className="homepage">
                <Mainheader />
                <div className="container-fluid">
                    <div className="row text">
                        <div className="col align-items-center align-self-center">
                            <h3>Games</h3>
                            <p>Check our list of games and see available times. Schedule now for a confirmed timeslot and a lower price. Or you can drop by anytime to see if we have any open rooms. </p>
                        </div>
                    </div>
                    <div className="row photo">
                        <div className="col">
                            <img className="responsive-image img-fluid" src="/WomanHeadset.jpg" alt="Woman wearing a virtual reality headset"></img>
                        </div>
                    </div>
                    <div className="row text">
                        <div className="col align-items-center align-self-center">
                            <h3>Coffee and Food</h3>
                            <p>Hang out in our coffee shop before or after your VR experience. Catch up with friends or join one of our coding workshops. We offer a variety of snacks and coffee roasted by Yeego.</p>
                        </div>
                    </div>
                    <div className="row photo">
                        <div className="col">
                            <img className="responsive-image img-fluid" src="/ManHeadset.jpg" alt="Man wearing a virtual reality headset"></img>
                        </div>
                    </div>
                    <div className="row text">
                        <div className="col align-items-center align-self-center">
                            <h3> About Us</h3>
                            <p>I was hooked on VR the moment I put my first VR headset on and I think you will be too! Check out how we started, our vision, our location and all the rest.</p>
                        </div>
                    </div>
                    <div className="row photo">
                        <div className="col">
                            <img className="responsive-image img-fluid" src="/GirlHeadset.jpg" alt="Young girl wearing a virtual reality headset"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;