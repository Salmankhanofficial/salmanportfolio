import React from 'react'
import './footer.css'

import { BiUpArrowAlt } from 'react-icons/bi';
const  Footer=()=> {
  return (
    <div className="footer-wrapper">
        <div className="footer-text">
            <p>copyright 2023 	&copy; by salman khan all right reserved</p>
        </div>
        <div className="footer-icon">
         <a href='#Home'>  <BiUpArrowAlt className='icon' /></a> 
        </div>
    </div>
  )
}

export default Footer