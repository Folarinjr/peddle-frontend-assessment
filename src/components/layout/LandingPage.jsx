import React from 'react'

import Form from '../user/Form'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className="header__Text">
            <h1 className='header__Text--hero'>SOMETHING AWESOME IS COMING SOON</h1>
            <p>
              Your all-in-one affliate marketing tracking software
              <strong> track, automate</strong> and <strong>optimize</strong> your campaigns.
            </p>
          </div>
          <div className="header__time">
            <div className="header__time--item">
              <h2>7</h2>
              <span>Days</span>
            </div>
            <div className="header__time--item">
              <h2>24</h2>
              <span>Hours</span>
            </div>
            <div className="header__time--item">
              <h2>54</h2>
              <span>Minutes</span>
            </div>
            <div className="header__time--item">
              <h2>11</h2>
              <span>Seconds</span>
            </div>
          </div>

            <div>
              <Form/>
            </div>
        </div>
      </div>
      
      <div className="curve">
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage