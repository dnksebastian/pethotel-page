import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    
    return (
        <footer>
            <div className="ft-logo-wrapper">
            <FontAwesomeIcon icon={faPaw} style={{color: "#575C0E"}} size='2x'/>
            <span className='ft-logo-name' style={{color: "#D69723"}}>Pet Hotel</span>
            </div>
            <ul className="ft-menu">
            <li className="ft-menu-li">
                        <a href="#/" className="ft-menu-link">
                            Home
                        </a>
                    </li>
                    <li className="ft-menu-li">
                        <a href="#/" className="ft-menu-link">
                            Services
                        </a>
                    </li>
                    <li className="ft-menu-li">
                        <a href="#/" className="ft-menu-link">
                            About Us
                        </a>
                    </li>
                    <li className="ft-menu-li">
                        <a href="#/" className="ft-menu-link">
                            Contact
                        </a>
                    </li>
            </ul>
            <ul className="ft-social">
                <li className='ft-social-li'>
                    <a href="#/" className='ft-social-a'>
                    <FontAwesomeIcon className='ft-social-icon' icon={faSquareFacebook} fixedWidth size='2x'/>
                    </a>
                </li>
                <li className='ft-social-li'>
                    <a href="#/" className='ft-social-a'>
                    <FontAwesomeIcon className='ft-social-icon' icon={faSquareTwitter} fixedWidth size='2x'/>
                    </a>
                </li>
                <li className='ft-social-li'>
                    <a href="#/" className='ft-social-a'>
                    <FontAwesomeIcon className='ft-social-icon' icon={faSquareInstagram} fixedWidth size='2x'/>
                    </a>
                </li>
            </ul>
            <p className="copyright">Copyright © {new Date().getFullYear()} Sebastian Dulniawka</p>
        </footer>
    )
};

export default Footer