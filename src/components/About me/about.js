import React from 'react'
import pic from "../Images/mypic.png"
import "./about.css";

function About() {
    return (
    <div id="about" className='about-head'>
        <div className='about'>
            <div className="about-about">About <span className='about-me'>Me</span></div>
            {/* <div className='about-line'>______________________________________</div> */}
        </div>
        <div className="about-body">
            <div className="about-img">
                <img className='about-pic' src={ pic} alt='pic'></img>
            </div>
            <div className="about-info">
                <div className="about-skill">
                Frontend Developer &<div className='about-skill6'>Graphic Designer :</div></div>
                <div className="about-skill1 about-skill3">
                I'm a dynamic creative professional with a background in both graphic design and frontend development. While my journey began as a student, I've actively applied my skills and passion to gain valuable hands-on experience in both of these exciting domains.</div>

<div className='about-skill4 about-skill3'>In the realm of graphic design, I've had the opportunity to blend artistry and storytelling. Whether it's crafting captivating visuals, designing engaging marketing materials, or shaping the aesthetic character of digital platforms, I've been immersed in the world of visual communication.</div>
                <div className="about-skill2 about-skill3">
                Concurrently, I've ventured into the world of frontend development. While I started as a novice, I've actively honed my expertise in HTML, CSS, and JavaScript to construct user-friendly and responsive web interfaces.</div>

<div className='about-skill5 about-skill3'>My journey as a designer and developer is a testament to my passion for continuous learning and adaptation. I'm committed to staying updated with the latest design trends and emerging technologies in the fast-evolving world of both graphic design and frontend development.</div>
                {/* <div className="about-readmore about-skill3">
                    <div className='a'>Read more..</div>
                </div> */}
            </div>

        </div>

    </div>
     )
}
export default About;