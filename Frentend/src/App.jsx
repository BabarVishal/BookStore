import React from 'react'

import { Routes, Route } from "react-router-dom";
import Getdeta from './Get.jsx/Getdeta';
import Coursess from './Courses/Coursess';
import CouAbout from './Courses/CouAbout'
import CouContact from './Courses/CouContact'
import LoginForm from './Componats/login';
import SignUpForm from './Componats/Singin'

function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Getdeta/>} />
          <Route path="/Cours" element={<Coursess/>}/>
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="/Singin" element={<SignUpForm/>}/>
          <Route path="/About" element={< CouAbout/>}/>
          <Route path="/contact" element={< CouContact/>}/>
    </Routes>
    </>
  )
}

export default App
