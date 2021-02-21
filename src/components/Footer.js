import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <Container fluid={true} className="footerbox">
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                    </Col>
                    <Col>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/">VR</Link></li>
                            <li><Link to="/">Coffee/Food</Link></li>
                            <li><Link to="/">Event Rental</Link></li>
                            <li><Link to="/">About Us</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container> 
        );
    }
}

export default Footer;