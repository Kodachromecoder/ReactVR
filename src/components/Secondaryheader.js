import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';


class Secondaryheader extends Component {
    render() {
        return (
            <div >
                <Jumbotron className="headsets" fluid>
                    <Container  fluid>
                        <h1 >Your Virtual Reality Experience</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Secondaryheader;