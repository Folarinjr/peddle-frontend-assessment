import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assests/logo.png'

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('/contact');

    //initialize navigation
    const navigate = useNavigate();

  return (
    <div className='navBar'>
        <div className='navBar__logo--box' onClick={()=> navigate("/")}>
            <img src={logo} alt="logo..." className='navBar__logo' />
        </div>
        
        <div className="navBar__links">
            <Link 
                to="/about" 
                onClick={()=> setActiveNav('/about')} 
                className={activeNav === '/about' ? 'active': 'navBar__links--link' }
            >
                About Us
            </Link>

            <Link 
                to="/blog" 
                onClick={()=> setActiveNav('/blog')} 
                className={activeNav === '/blog' ? 'active': 'navBar__links--link' }
            >
                Blog
            </Link>

            <Link 
                to="/contact" 
                onClick={()=> setActiveNav('/contact')} 
                className={activeNav === '/contact' ? 'active': 'navBar__links--link' }
            >
                Contact Us
            </Link>
        </div>
    </div>
  )
}

export default NavBar