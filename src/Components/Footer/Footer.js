import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarker } from '@fortawesome/free-solid-svg-icons'

import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  
    return (
        <div>
            <div className="footer">
            <Container>
                    <Row>
                    <Col>
                            <h4>AKASH HOSPITAL PVT LTD</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente nam odit reiciendis adipisci doloremque labore et nihil animi? Laboriosam nam odit voluptatum nulla facere, eligendi soluta tempora ut molestias.</p>
                            <p><FontAwesomeIcon icon={faMapMarker} /> GulShan 2. House : 21/3 </p>
                            <p><FontAwesomeIcon icon={faPhone} /> +888 01997122653</p>
                            <p className="m-0"><FontAwesomeIcon icon={faEnvelope}/>      akash69.net@gmail.com</p>
                   
                    </Col>
                        <Col><h4>QUICK LINK</h4>
                            <ul>
                                <div className="footer-link">
                                <li><NavLink to="/home">Home</NavLink></li>
                              <li><NavLink to="/services">Services</NavLink></li>
                          <li><NavLink to="/specialists">Specialists</NavLink></li>
                            
                              <li><NavLink to="/gallery">Gallery</NavLink></li>
                            
                              <li><NavLink to="/contacts">Contact us</NavLink></li>
                            
                              <li><NavLink to="/about">About</NavLink></li>
                                </div>
                              
                             
                            </ul>
                        
                        </Col>
                        <Col>
                            <p>Payment by </p>
                            <img src={'https://i.ibb.co/FKNvrd2/payment.jpg'} alt="" />
                        </Col>

                    </Row>
                  
            
            </Container>
            </div>
            <p className="text-white text-center bg-primary copyright"> Copy-right@akash hospital pvt ltd</p>

        </div>
    );
};

export default Footer;