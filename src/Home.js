import React from 'react'
import Footer from './Footer'
import Issue from './Issue'
import Nav from './Nav'
import "./Home.css"
function Home() {
  return (
    <div className='main_container'>
      <div className='nav_container'>
        <Nav />
      </div>

      <div className='side_container'>
        <Issue />
        <Footer />
      </div>
    </div>
  )
}

export default Home