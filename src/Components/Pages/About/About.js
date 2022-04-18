import React from 'react';
import './About.css';

const About = () => {
   return (
      <section className='about__section py-5'>
            <div className="container">
               <h2 className='text-center py-4'>Simple Information About Me</h2>

               <article className="about_content">
                  <p>
                     Hi, I'm Mihir! I'm from Bangladesh. I've a big dream to become a good and skilled full stack web developer.
                     That's why i learning code day by day to full fill my dream. So my first goal is to acquiring knowledge 
                     about how to code and how to make simple website with some technology, Second goal is learning web server and how make dynamic 
                     website with server site language because i want to be a full stack developer. After all my final goal is want to get a good job where 
                     i can implement my great knowledge about web development.
                  </p>
               </article>
            </div>
      </section>
   );
};

export default About;