import React from 'react';
import seedsLogo from '../assets/seeds.svg';
import '../CSS/Home.css'

function Home() {
    return (
        <div>
            {/* <a href="https://vite.dev" target="_blank"> */}
          <img src={seedsLogo} className="logo" alt="Vite logo" />
            {/* </a> */}
             <h1>Seeds of Success</h1>
        </div>
    );
}

export default Home;
