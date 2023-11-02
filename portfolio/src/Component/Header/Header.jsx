import React, { useState } from 'react';
import './header.css';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
        setShowMenu(prevMenu => !prevMenu);
    };

    return (
        <div className="header-wrapper">
            <a href='#Home'><div className="header-logo"><img src="https://logos.textgiraffe.com/logos/logo-name/36121902-designstyle-african-m.png" alt="" /></div></a>
            <div className="mobile-icon" onClick={toggleMenu}>
                {showMenu ? <AiOutlineClose /> : <BiMenu />}
            </div>
            <div className='navbar'>
                <ul className={showMenu ? 'show' : ''}>
                    <li onClick={(e)=>setShowMenu('')}><a href="#Home" className='active'>Home</a></li>
                    <li onClick={(e)=>setShowMenu('')}><a href="#about">About</a></li>
                    <li onClick={(e)=>setShowMenu('')}><a href="#skills">Skills</a></li>
                    <li onClick={(e)=>setShowMenu('')}><a href="#services">Services</a></li>
                    <li onClick={(e)=>setShowMenu('')}><a href="#projects">Projects</a></li>
                    <li onClick={(e)=>setShowMenu('')}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
