import React,{useState} from 'react'
import "./portfolio.css"
import img1 from "../Images/Rectangle 20.png"
import img2 from "../Images/Rectangle 20.png"
import img3 from "../Images/Rectangle 22.png"
import img4 from "../Images/Rectangle 23.png"
import img5 from "../Images/Rectangle 24.png"
import img6 from "../Images/Rectangle 25.png"
import img7 from "../Images/Rectangle 26.png"
import img8 from "../Images/Rectangle 27.png"
import icon from "../Images/Vector.png"

const Portfolio = () => {

  const [hovering, sethovering] = useState(false);

  const on_hovering=()=>{
    sethovering(true);
  }

  const leave_hovering=()=>{
    sethovering(false);
  }

  return (
    <div id="portfolio" className='portfolio-head'>
        <div className='portfolio'>
            <div className='portfolio-name'>Portfolio</div>
        </div>
        <div className='portfolio-img'>
            <div className='portfolio-pic'>
            {
              [
                {"image":img1,"link":"https://www.google.com"},
                {"image":img2,"link":"https://www.youtube.com"},
                {"image":img3,"link":"https://www.google.com"},
                {"image":img4,"link":"https://www.google.com"},
                {"image":img5,"link":"https://www.google.com"},
                {"image":img6,"link":"https://www.google.com"},
                {"image":img7,"link":"https://www.google.com"},
                {"image":img8,"link":"https://www.google.com"},
              
              ].map((i,k)=>{
                return (
                  <div className="pic1">
                <img onMouseOver={on_hovering} onMouseOut={leave_hovering} className='pic' 
                src={i.image} alt="img" />
                 {hovering && <div className='portfolio-layer'>
                  <a href={i.link} target='_blank' rel="noreferrer">
                 <img className='icon' src={icon} alt=''/>                
                  </a>
                 </div>}
              </div>
                )
              })
            }
              
            </div>
            </div>
    </div>
  )
}

export default Portfolio