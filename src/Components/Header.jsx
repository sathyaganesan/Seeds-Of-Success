import { useState } from "react";
import { Link } from "react-router-dom";
import'./Home.jsx';
import './About.jsx';
import './AboutCard.jsx';
import './OurTeam.jsx';
import'./GetInvolved.jsx';
import'./SignUpVolunteer.jsx';
import seedsLogo from '../assets/seeds.svg';
import '../CSS/Header.css';

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="main-header" >
      <Link to="/">
        <img src={seedsLogo} className="logo" alt="Vite logo" /> 
      </Link>
      <div className='right-container'>
        <nav 
          id="primary-nav" 
          className={`nav ${open ? "open" : ""}`} padding
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false); // close if a link was clicked
          }}
          >
            <Link to = "/" className='head-font'> Home </Link>
            <Link to = "/about" className='head-font'> About </Link>
            <Link to = "/aboutCard" className='head-font'> AboutCard </Link>
            <Link to = "/ourTeam" className='head-font'> Our Team </Link>
            <Link to = "/getInvolved" className='head-font'> Get Involved </Link>
            <Link to = "/signUpVolunteer" className='head-font'> Sign Up Volunteer </Link>
        </nav>
      </div>
      <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(o => !o)}
        >
          ☰
        </button>
    </header>
  );
}