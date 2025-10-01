import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import OurTeam from './OurTeam.jsx';
import GetInvolved from './GetInvolved.jsx';
import SignUpVolunteer from './SignUpVolunteer.jsx';
import { Link, BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  return (
    <header >
        <nav className='padding'>
            <Link to = "/" className='head'> Home </Link>
            <Link to = "/about" className='head'> About </Link>
            <Link to = "/ourTeam" className='head'> OurTeam </Link>
            <Link to = "/getInvolved" className='head'> GetInvolved </Link>
            <Link to = "/signUpVolunteer" className='head'> SignUpVolunteer </Link>
        </nav>
    </header>
  );
}
export default Header;