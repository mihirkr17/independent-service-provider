import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../../hooks/useApi';


const Checkout = () => {
   const url = "service.json";
   const [data] = useApi(url);
   const { serviceId } = useParams();
   const findService = data.find(s => parseInt(s.id) === parseInt(serviceId));

   return (
      <div className='checkout__section'>
         {

            findService ? findService.name : ""
         }
      </div>
   );
};

export default Checkout;