import React from 'react';
import pic1 from "../Images/laptop-code.png"
import pic2 from "../Images/mobile-alt.png"
import pic3 from "../Images/chart-bar.png"
import "./services.css";

function Services() {
  return (
    <div id='services' className='service-head'>
    <div className='service'>
        <div className="service-my">My <span className='service-services'>Services</span></div>
        {/* <div className="service-line"><hi>______________________________________</hi></div> */}
    </div>
    <div className='service-body'>
      <div className="service-web service-items">
        <img className='services-pic1 ' src={pic1} alt='pic1'></img>
        <div className='web-name'>Web Development</div>
        <div className='web-theory service-pic'>I have successfully completed a basic web development project, learning HTML, CSS, and JavaScript. This experience provided me with a solid foundation in creating and styling web pages.</div>
      </div>
      <div className='service-app service-items'>
      <img className='services-pic2 ' src={pic2} alt='pic1'></img>
      <div className='app-name'>Apps Development</div>
      <div className='app-theory service-pic'>I have completed a basic app development project, learning to design and build mobile applications using key programming languages.</div>
      </div>
      <div className='service-digital service-items'>
      <img className='services-pic3 ' src={pic3} alt='pic1'></img>
      <div className='digital-name '>Digital Marketing</div>
      <div className='digital-theory service-pic'>I have gained foundational skills in SEO, social media marketing, and email campaigns</div>
      </div>
    </div>
    </div>
   )
  };

export default Services;