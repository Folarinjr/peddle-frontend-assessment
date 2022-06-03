import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='container'>
        <div className="home">
            <h1>Welcome!</h1>
            <div className="home__links">
                <Link to="/github" className="home__links--link">GitHub &rarr;</Link>
                <Link to="/comingsoon" className="home__links--link">Coming Soon &rarr;</Link>
                <Link to="/about" className="home__links--link">About Company &rarr;</Link>
            </div>
        </div>
    </div>
  )
}

export default Home