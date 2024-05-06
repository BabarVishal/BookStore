import React from 'react'
import Navbar from '../Componats/Navbar'
import Footer from '../Componats/Footer'
import AboutPage from '../Componats/About'

function CouAbout() {
  return (
    <>
    <Navbar />
    <div className="mt-20">
    <AboutPage/>
    </div>
    <Footer />
    </>
  )
}

export default CouAbout
