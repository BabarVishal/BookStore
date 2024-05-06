import React from 'react'
import Navbar from '../Componats/Navbar'
import Footer from '../Componats/Footer'
import ContactPage from '../Componats/Contact'

function CouContact() {
  return (
    <>
    <Navbar />
    <div className='m-0 mt-20'>
    <ContactPage />
    </div>
    <div className=" mb-100">
    <Footer />
    </div>
   
    </>
  )
}

export default CouContact
