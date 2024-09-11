import React from "react";
import LOGO from "../Images/facebook-f.png"
import LOGO1 from "../Images/github.png"
import LOGO2 from "../Images/instagram.png"
import LOGO3 from "../Images/linkedin-in.png"
import pic1 from "../Images/Banner Image.png"
import "./home.css";



function Home() {
    return (
        <div id="home" className="home-body" >
            <div className="home-matter">
                <div className="home-text">
                    Hi, It's me
                </div>
                <div className="home-name">
                    M.V.S.S.NANDA KISHORE
                </div>
                <div className="home-skill1">And I'm a<span className="home-skill2"> Frontend Developer</span>
                </div>
                <div className="home-text2"><div className="home-text1">I am a student and</div> <div className="home-text1">I am pursuing my B-tech in VVIT college, guntur.</div><div className="home-text1">I am beginner in Frontend Development.</div>
                </div>
                <div className="home-image">
                    <img className="home-pic" src={LOGO} alt="logo"></img>
                    <a href="https://github.com/sai9252" target="_blank" rel="noreferrer"><img className="home-pic" src={LOGO1} alt="logo"></img></a>
                    <a href="https://instagram.com/the_haters_lover_007?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer"><img className="home-pic" src={LOGO2} alt="logo"></img></a>
                    <a href="https://www.linkedin.com/in/viswash-sri-sai-nanda-kishore-m-9434b522a" target="_blank" rel="noreferrer"><img className="home-pic" src={LOGO3} alt="logo"></img></a>
                </div>
                <div className="home-download">
                    <a href="Resume nrml.pdf" download={true} ><h3 className="home-h3">Download Resume</h3></a>
                </div>
            </div>
            <div className="home-image1">
                <img className="home-pic1" src={pic1} alt="pic1"></img>
            </div>
        </div>
    )
}
export default Home;