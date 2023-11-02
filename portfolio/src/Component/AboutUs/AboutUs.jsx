import React from 'react'
import './aboutUs.css'
const AboutUs = () => {
  return (
    <div className="aboutus-wrapper" id="about"> 
        <h2 className='about-text'>About <span>Me</span></h2>
        <div className="about-image">
            <img src='./images/salman.png'></img>
            <div className="circle-spain"></div>
        </div>

        <div className="about-content ">
            <h3>full stack developer</h3>
            <p>
            I am a passionate web developer specialized in the MERN stack with a keen 
            eye for creating interactive and efficient web solutions. With a strong foundation
             in MongoDB, Express.js, React, and Node.js, I have successfully designed, developed, 
             and deployed multiple responsive web applications. My experience extends from conceptualizing 
             architecture
             to deploying scalable applications that cater to thousands of users.
            </p>

            <div className="button">
                <button className='btn'>read more</button>
            </div>
        </div>


    </div>
  )
}

export default AboutUs