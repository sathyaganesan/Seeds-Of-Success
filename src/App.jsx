import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from'./Components/Header';
// import About from './Components/About';
import About from './Components/AboutCard';
import Home from './Components/Home';
import GetInvolved from './Components/GetInvolved';
import OurTeam from './Components/OurTeam';
import SignUpVolunteer from './Components/SignUpVolunteer';
import Tutors from './Components/GetInvolved/Tutors';
import Coordinator from './Components/GetInvolved/Coordinator';
import CurriculumDev from './Components/GetInvolved/CurriculumDev';
import TechImplementor from './Components/GetInvolved/TechImplementor';
import Helpers from './Components/GetInvolved/Helpers';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          {/* <Route path = "/about" element = {<About />}/> */}
          <Route path = "/about" element = {<About />}/>
          <Route path = "/ourTeam" element = {<OurTeam/>} />
          <Route path = "/getInvolved" element = {<GetInvolved/>} />
          <Route path = "/signupvolunteer" element = {<SignUpVolunteer/>} />
          <Route path = "/tutors" element = {<Tutors/>} />
          <Route path = "/coordinators-mentors" element = {<Coordinator/>} />
          <Route path = "/curriculum-developers" element = {<CurriculumDev/>} />
          <Route path = "/technology-implementors" element = {<TechImplementor/>} />
          <Route path = "/behind-the-scene-helpers" element = {<Helpers/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
