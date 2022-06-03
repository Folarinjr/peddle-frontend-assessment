import React, {useState} from 'react'
import {BsYoutube, BsLinkedin, BsInstagram} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    const [active, setActive] = useState('#');
  return (
    <footer className='footer'>
        <div className="footer__icons">
            <BsYoutube 
                onClick={()=> setActive('#')} 
                className={active === '#' ? 'footer__active': ''}
            />
            <AiOutlineFacebook
                onClick={()=> setActive('#fa')} 
                className={active === '#fa' ? 'footer__active': ''}
            />
            <BsLinkedin
                onClick={()=> setActive('#link')} 
                className={active === '#link' ? 'footer__active': ''} 
            />
            <BsInstagram 
                onClick={()=> setActive('#insta')} 
                className={active === '#insta' ? 'footer__active': ''}
            />
            <FaTwitterSquare
                onClick={()=> setActive('#twitter')} 
                className={active === '#twitter' ? 'footer__active': ''} 
            />
        </div>

        <div className="footer__terms">
            <span>Terms of services</span>
            <span>Privacy policy</span>
        </div>
        <p className="footer__text">
            Copyright 2021 @ Peddle Technologies. All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer