import React from 'react'
import pic1 from "../Images/phone-alt.png"
import pic2 from "../Images/envelope.png"
import pic3 from "../Images/location-arrow.png"
import "./contact.css"

const Contact = () => {
    return (
        <div id="contact" className='contact'>
            <div className='contact-head'>
                <div className='contact-name'>Contact</div>
            </div>
            <div className='contact-body'>
                <div className='contact-details'>
                    <div className='contact-info'>
                        <div className='contact-call'>
                            <img src={pic1} alt='pic1' />
                        </div>
                        {/* <div className="conatact-s"> */}
                        <div className='contact-mess1'>+91 7569764379 </div>
                        {/* <div className='contact-mess2'></div> */}
                    {/* </div> */}
                    </div>
                    <div className='contact-info1'>
                        <div className='conatct-mess'>
                            <img src={pic2} alt='pic2' />
                        </div>
                        <div className='contact-mess1'>msai9252@gmail.com</div>
                    </div>
                    <div className='contact-info2'>
                        <div className='contact-chat'>
                            <img src={pic3} alt='pic3' />
                        </div>
                        <div className='contact-mess1'>Boyanapudi , VK.Rayapuram , KKD</div>
                    </div>
                </div>
                <div className='contact-details1'>
                <div className='contact-name1'>
                    <input type='text' className='input-1' placeholder='Full Name' />
                </div>
                <div className='contact-email'>
                <input type='text' className='input-2' placeholder='Email Address' />
                </div>
                <div className='both'>
                <div className='contact-phone'>
                <input type='text' className='input-3' placeholder='Phone Number' />
                </div>
                <div className='contact-subject'>
                <input type='text' className='input-4' placeholder='Subject' />
                </div>
                </div>
                <div className='contact-message'>
                <input type='text' className='input-5' placeholder='Your Message' />
                </div>
                <div className='contact-send'>
                    <button className='contact-button'>Send</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;