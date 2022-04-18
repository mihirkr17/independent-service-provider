import React from 'react';
import './Service.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
   const { id, name, description, img, price } = service;

   return (
      <Card className='service_card'>
         <Card.Img variant="top" src={img} />
         <Card.Body>
            <Card.Title className='text-center fw-bold pt-3 pb-2'>{name}</Card.Title>
            <Card.Text className='text-muted'>
               Price : {price}
            </Card.Text>
            <Card.Text>
               {description.slice(0, 60) + "..."}
            </Card.Text>
         </Card.Body>
         <Card.Body>
            <Card.Link as={Link} to={`/checkout/${id}`}>More Info</Card.Link>
         </Card.Body>
      </Card>
   );
};

export default Service;