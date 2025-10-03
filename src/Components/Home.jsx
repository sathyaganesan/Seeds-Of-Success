import React from 'react';
import seedsLogo from '../assets/seeds.svg';
import '../../public/SeedsofSuccess.mp4'
import '../CSS/Home.css'

function Home() {
    return (
        <div>
            {/* <h1>Seeds of Success</h1> */}
            <section className="video-wrap">
                <video
                    className="video"
                    src="/SeedsofSuccess.mp4"   // local file in /public
                    poster="/seeds.svg"         // optional thumbnail
                    controls                    // show controls; remove if you auto-play
                    preload="metadata"          // faster first paint
                    // playsInline                 // iOS inline playback
                />
            </section>
        </div>
    );
}

export default Home;
