import React from 'react';

const Footer = () => {
   const date = new Date();
   const currentYear = date.getFullYear();
   return (
      <footer className='py-5 bg-light text-center'>
         <p>HealthCoach &copy; {currentYear}</p>
      </footer>
   );
};

export default Footer;