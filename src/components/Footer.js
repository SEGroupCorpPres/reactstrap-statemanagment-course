import React from 'react';
import {Col, Container, Row} from "reactstrap";

function Footer(props) {
    return (
        <footer className="bg-dark text-white py-4 position-relative ">
            <Container>
                <Row>
                    <Col md="4">
                        <h5>About Us</h5>
                        <p>
                            We provide quality training and services to help you achieve your goals.
                        </p>
                    </Col>
                    <Col md="4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-white">About</a></li>
                            <li><a href="/services" className="text-white">Services</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>Contact</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;