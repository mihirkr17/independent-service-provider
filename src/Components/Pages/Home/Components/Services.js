import React from 'react';
import { ServiceData } from '../../../../Data/ServiceData';
import Service from './Service';

const Services = () => {

   return (
      <section className="services__section py-5" id='services'>
         <div className="container">
            <h2 className='text-center py-4 mt-5'>My Services</h2>

            <div className="row">
               {
                  ServiceData ? ServiceData.map(service => {
                     const { id } = service;

                     return (
                        <div className="col-lg-4" key={id}>

                           <Service service={service}></Service>

                        </div>
                     )
                  }) : ""
               }

            </div>
         </div>
      </section>
   );
};

export default Services;