import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceData } from '../../../Data/ServiceData';

const Checkout = () => {

   const { serviceId } = useParams();
    const d = ServiceData.find(s => parseInt(s.id) === parseInt(serviceId));

   return (
      <div className='checkout__section'>
         {
            d.name
         }
      </div>
   );
};

export default Checkout;