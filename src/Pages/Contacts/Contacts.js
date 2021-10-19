import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            <h4 className="text-center">AKASH CARE HOSPITAL PVT LTD</h4>
            <div className="location">
            <Container>
                <Row>
                    <Col>
                        <h3>AKASH CARE HOSPITAL PVT LTD. DHAKA</h3>
                        <p>Gulshan 21/3 House : 23/4</p>
                        <p>Email : akashcaredhaka@gmail.com</p>
                        <p>Fax : +938393949</p>
                    </Col>
                    <Col>
                        <h3>AKASH CARE HOSPITAL PVT LTD. Singapur</h3>
                        <p> Mounth Elejabetj Road House  House : 3/2</p>
                        <p>Email : akashcaresignapur@gmail.com</p>
                        <p>Fax : +93238393949</p>
                    </Col>
                    
                    <Col>
                        <h3>AKASH CARE HOSPITAL PVT LTD. Malasia</h3>
                        <p> Kolalampur . House  House : 3/2</p>
                        <p>Email : akashcaremalaisa@gmail.com</p>
                        <p>Fax : +9323839394339</p>
                    </Col>
                    
                    
                   
                    
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Contacts;