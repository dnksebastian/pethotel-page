import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    
    return (
        <header>
            <div className="logo-wrapper">
            <FontAwesomeIcon icon={faPaw} style={{color: "#575C0E"}} size='2x'/>
            <span className='logo-name' style={{color: "#D69723"}}>Pet Hotel</span>
            </div>
            <nav className={`top-nav ${menuActive ? 'active' : 'hidden'}`}>
                <ul className="menu-list">
                    <li className="menu-li">
                        <a href="#/" className="menu-link">
                            Home
                        </a>
                    </li>
                    <li className="menu-li">
                        <a href="#/" className="menu-link">
                            Services
                        </a>
                    </li>
                    <li className="menu-li">
                        <a href="#/" className="menu-link">
                            About Us
                        </a>
                    </li>
                    <li className="menu-li">
                        <a href="#/" className="menu-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="mobile-toggle" onClick={() => setMenuActive(!menuActive)}>
            <FontAwesomeIcon className={`m-icon-menu hamburger ${menuActive ? 'hidden' : 'active'}`} icon={faBars} fixedWidth size='2x'/>
            <FontAwesomeIcon className={`m-icon-menu close-menu ${menuActive ? 'active' : 'hidden'}`} icon={faXmark} fixedWidth size='2x'/>
            </div>
        </header>
    )
};

export default Header