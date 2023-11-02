import React from 'react'
import  "./projects.css"
import {AiFillGithub} from 'react-icons/ai';

function Project() {
  return (
    <div className="projects-wrapper" id='projects' >
        <div className="heading-text" >
        <h1>My <span>Projects</span></h1>
        </div>

        <div className="cards-container">
            <div className="card">
            <img src='./images/frontend.png'></img>
           <div className="icon-section">
                <h1>Online Quran Portal</h1>
                <a href='https://github.com/Salmankhanofficial/Quran-Academy'
                 target='_blank' ><AiFillGithub  className='icon'/> </a>

                </div>
            
            </div>
            <div className="card">
            <img src='./images/backend.png'></img>
           <div className="icon-section">
                <h1>My portfolio website </h1>
                <a href='https://github.com/Salmankhanofficial/portfolio.git'
                 target='_blank' ><AiFillGithub  className='icon'/> </a>

                </div>
               
            </div>
            {/* <div className="card">
                <img src='./images/ui.png'></img>
                <div className="icon-section">
                <h1>E learning </h1>
                <a href='https://www.linkedin.com/in/salman-farooqi-82554125a/'
                 target='_blank' ><AiFillGithub  className='icon'/> </a>

                </div>
               
               
            </div> */}
        </div>
        
    </div>
  )
}

export default Project;