import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from'./Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import GetInvolved from './Components/GetInvolved';
import OurTeam from './Components/OurTeam';
import SignUpVolunteer from './Components/SignUpVolunteer';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/ourTeam" element = {<OurTeam/>} />
          <Route path = "/getInvolved" element = {<GetInvolved/>} />
          <Route path = "/signupvolunteer" element = {<SignUpVolunteer/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
