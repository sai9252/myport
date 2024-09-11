import React,{useState} from 'react'
import "./portfolio.css"
import img1 from "../Images/Rectangle 20.png"
import img2 from "../Images/Rectangle 20.png"
import img3 from "../Images/Rectangle 22.png"
import img4 from "../Images/Rectangle 23.png"
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
                {"image":img2,"link":"https://helpful-dragon-1a2e8c.netlify.app/"},
                {"image":img3,"link":"https://www.google.com"},
                {"image":img4,"link":"https://www.google.com"},
              
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