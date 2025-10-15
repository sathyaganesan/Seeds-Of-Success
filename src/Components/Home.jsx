import React from 'react';
import { Link } from 'react-router-dom';
import seedsLogo from '../assets/seeds.svg';
import '../assets/SeedsofSuccess.mp4';
import '../CSS/Home.css'
import './About';
import './OurTeam';
import './GetInvolved';

function Home() {
    return (
        <div>
            <div className='split-container'>
                <div className='font-container'>
                    <h3 className='margin'>Seeds of Success</h3>
                    <p className='margin'>Breaking Barriers, Creating Possibilities</p>
                </div>
                <div className='img-container'>
                    <video
                        className="video"
                        src="/SeedsofSuccess.mp4"   // local file in /public
                        poster={seedsLogo}         // optional thumbnail
                        controls                    // show controls; remove if you auto-play
                        preload="metadata"          // faster first paint
                        // playsInline                 // iOS inline playback
                    />
                </div>
            </div>
            <div className='tab-container'>
                <div className='tab tab1'>
                    <h3 className='margin'>
                        <Link to="/about" className='link'> About </Link>    
                    </h3>
                    <p>
                        Our Story, Our Approach, Our Mission, Our Impact
                    </p>
                </div>
                <div className='tab tab2'>
                    <h3 className='margin'>
                        <Link to="/OurTeam" className='link'> Our Team </Link>    
                    </h3>
                    <p>
                        Founders, Tutors, Students
                    </p>
                </div>
                <div className='tab tab3'>
                    <h3 className='margin'>
                        <Link to="/getInvolved" className='link'> Get Involved </Link>
                    </h3>
                    <p>
                        Volunteer, Participate 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
