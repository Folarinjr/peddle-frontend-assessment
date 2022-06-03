import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer'

import Logo from '../../assests/logo.png'
import dot from '../../assests/dot.png'

const About = () => {
    //style for background image
    const style={
        backgroundImage: `radial-gradient( #4a2c6c, #35297aa8),url(${Logo})`
    }
    
  return (
    <div className='about'>
        <div className="about__hero" style={style}>
            <h5 className="about__hero--word">
                &#8212;&#8212;&#8212; ABOUT US
            </h5>
            <div className="about__hero--text">
                <h2>Built for Saas</h2>
                <h2>
                    <span>and E-commerce</span>
                </h2>
            </div>
            <div className="about__hero--paragraph">
                <span>
                    Our tools are easy to set up and use with a user friendly
                    dashboard that enables you to set up,
                    launch, automate and manage multi-affliate campaigns in 5 minutes.
                </span>
            </div>
        </div>
        
        <div className="about__intro">
            <p>
                Metricks was developed because just like you, we needed a product that could give us
                <strong> good value.</strong>
            </p>
        </div>
        
        <div className="about__details">
            <div className="about__details--1">
                <div className="about__details--box-1">
                    <small>01</small>
                    <h3>&#8212;&#8212;&#8212; WHY US?</h3>
                    <br/>
                    <p>
                        We pride ourselves in our ability to innovate
                        and create world-class tools that provide reliable and efficient 
                        touchpoints between advertisers and affiliates.
                    </p>
                </div>
                
                <div className="about__details--box-2">
                   <div className="about__details--img" style={{ backgroundImage: `url(${dot})` }}></div>
                </div>
            </div>
            <div className="about__details--2" style={style}>
                <small>02</small>
                <h3>&#8212;&#8212;&#8212; GROWING WITH YOU</h3>
                <br/>
                <p>
                    Leveraging the best technology, we have developed an all-in-one 
                    affiliate marketing tracking software, a genius tool to help you track,
                    automate and optimize your influencer campaigns, all from one dashboard.
                </p>
                <br/>
                <p>
                    Our team of experts are constantly brainstorming, testing and developing
                    new solution with only one thing in mind -your business growth. Your success
                    is our success and by giving you the tools you need to scale, we grow as well.
                </p>
            </div>
        </div>

        <div className="about__question">
            <div className="about__question--text">
                <h3>Got a Question?</h3>
                <p>
                    See how Metricks can help your business grow with best affiliate
                    marketing tracking software.
                </p>
                <Link to="/contact" className="about__question--text-link">Contact Us &#8594;</Link>
            </div>

            <div className="about__question--box">
                <div className="about__question--img" style={{ backgroundImage: `url(${Logo})` }}></div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}
export default About