import React from 'react'
import './heroSection.css'
 import { AiFillInstagram} from 'react-icons/ai';
 import {AiFillLinkedin} from 'react-icons/ai';
 import { AiFillFacebook} from 'react-icons/ai';
 import { Typewriter } from 'react-simple-typewriter'
function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MY RESUME MERN STACK.pdf'; // Replace with the actual path to your PDF file
    link.download = 'MY RESUME MERN STACK.pdf'; // Specify the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="hero-section-wrapper"  id="Home">
        <div className="hero-section-content">
     

        <h1>Hi , I am <span>Salman Khan</span></h1> 
         <div className="text-animation">
            <h3>


            <Typewriter
            words={["Mern stack developer"]}
            loop={5}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
            </h3>
        </div>
        <p>Passionate MERN Stack Developer 
           Crafting seamless <br /> web experiences with React, Node  and MongoDB 
           <br /> Dedicated to building innovative solutions</p>

            <div className="buttons">
                <button className='btn btn1' onClick={handleDownload}>download cv</button>
            
            </div>

            <div className="herosection-icons">
              <ul>

              <a href='https://www.instagram.com/salman_khan_offi_62/' target='_blank' ><li><AiFillInstagram /></li> </a>
             <a href='https://www.linkedin.com/in/salman-khan-2bb65722a/' target='_blank' >    <li><AiFillLinkedin /></li> </a>
            <a href='https://web.facebook.com/profile.php?id=100014997854494' target='_blank' > <li><AiFillFacebook/></li></a>
              </ul>
            </div>


            



        </div>

        
    </div>
  )
}

export default HeroSection