import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
   const {id, name, description} = service;

   return (
      <Card>
         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
         <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
               {description.slice(0, 60)}
            </Card.Text>
         </Card.Body>
         <Card.Body>
            <Card.Link as={Link} to={`/checkout/${id}`}>More Info</Card.Link>
         </Card.Body>
      </Card>
   );
};

export default Service;