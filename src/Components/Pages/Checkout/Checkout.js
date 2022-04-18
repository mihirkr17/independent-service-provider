import React from 'react';
import './Checkout.css';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ServiceData } from '../../../Data/ServiceData';

const Checkout = () => {

   const { serviceId } = useParams();
   const data = ServiceData.find(s => parseInt(s.id) === parseInt(serviceId));
   const { name, description, price, img } = data;

   return (
      <div className='checkout__section py-5'>
         <div className="container">
            <div className="row">
               <div className="col-lg-8 mx-auto">
                  <Card className='checkout_card'>
                     <Card.Title className='text-center py-3'>{name}</Card.Title>
                     <Card.Img variant="top" src={img} />
                     <Card.Body>
                        <small>Price: {price}</small>
                        <Card.Text className='py-4'>
                           Description <br /> {description}
                        </Card.Text>
                        <Card.Text className='text-center'>
                           <Button variant="success">Purchase With {price}</Button>
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;