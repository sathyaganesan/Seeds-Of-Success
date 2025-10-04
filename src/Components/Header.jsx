import React from 'react';
import'./Home.jsx';
import './About.jsx';
import './OurTeam.jsx';
import'./GetInvolved.jsx';
import'./SignUpVolunteer.jsx';
import { Link, BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import seedsLogo from '../assets/seeds.svg';
import '../CSS/Header.css';

function Header() {
  return (
    <header className="main-header" >
      <div className='left-container'>
        <Link to="/">
          <img src={seedsLogo} className="logo" alt="Vite logo" />
        </Link>
      </div>
      <div className='right-container'>
        <nav className='padding'>
            <Link to = "/" className='head-font'> Home </Link>
            <Link to = "/about" className='head-font'> About </Link>
            <Link to = "/ourTeam" className='head-font'> Our Team </Link>
            <Link to = "/getInvolved" className='head-font'> Get Involved </Link>
            <Link to = "/signUpVolunteer" className='head-font'> Sign Up Volunteer </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;