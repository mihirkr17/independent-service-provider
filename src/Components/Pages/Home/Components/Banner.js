import React from 'react';
import "./Banner.css";
import banner from '../../../../Assets/banner/banner-2.jpg';
import bannerImg from '../../../../Assets/banner/banner.png';
import { Link } from 'react-router-dom';
const bannerDesign = {
   background: "url(" + banner + ")"
}


const Banner = () => {
   return (
      <section className='banner__section' style={bannerDesign}>
         <div className="container-fluid">
            <div className="banner_person">
               <img src={bannerImg} alt="banner-person" />
            </div>
            <div className="banner_text">
               <h1 className='banner_intro'>Hi, I'm Ashley Graff!</h1>
               <p>Your new personal health coach for better life!</p>
               <Link to={'/about'} className='banner_btn'>About Me</Link>
            </div>
         </div>
      </section>
   );
};

export default Banner;