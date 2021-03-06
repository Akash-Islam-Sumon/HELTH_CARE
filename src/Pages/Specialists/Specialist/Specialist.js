import React from 'react';
import { Card } from 'react-bootstrap';

const Specialist = ({specialist}) => {
    const { name, img, description } = specialist;
    return (
        <div>
           
           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                    <Card.Body>
                    <Card.Title>{name }</Card.Title>
                         <Card.Text>
                        {description }
                    </Card.Text>
                 </Card.Body>
             </Card>
            
        </div>
    );
};

export default Specialist;