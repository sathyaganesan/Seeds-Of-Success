import React, { useRef, useCallback } from 'react';
import '../CSS/AboutCard.css';

export default function AboutCard() {

  const ourStory = useRef(null);
  const ourApproach = useRef(null);
  const ourMission = useRef(null);
  const ourImpact = useRef(null);

  const scrollToourStory = useCallback(() => {
    ourStory.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }, []);

  const scrollToourApproach = useCallback(() => {
    ourApproach.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }, []);

  const scrollToourMission = useCallback(() => {
    ourMission.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }, []);

    const scrollToourImpact = useCallback(() => {
    ourImpact.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }, []);

  return (
  <>
    <div >
      <div className='btn-block'>
        <div>
          <h2 className='title'>About</h2>
        </div>
        <div className='button-block'>
          <button className='btn' onClick={scrollToourStory} >Our Story</button>
          <button className='btn' onClick={scrollToourApproach} >Our Approach</button>
          <button className='btn' onClick={scrollToourMission} >Our Mission</button>
          <button className='btn' onClick={scrollToourImpact} >Our Impact</button>
        </div>
      </div>
      <div className='AboutCard-container'>
      <div ref={ourStory} className='AboutCard'>
        <h2 className='AboutCard-title'>Our Story</h2>
        <p className='AboutCard-body'>Many children in rural Tamil Nadu face severe challenges when learning English.
          Only 1 in 4 fifth graders can read and write simple English sentences. 
          For them, English remains a subject of theory rather than a usable practical skill. 
          This gap makes them lose confidence and limits their opportunities for higher education, jobs, 
          and connection with the wider world.
        </p>
        <p className='AboutCard-body'>Seeds of Success is a youth-led, registered nonprofit in Virginia, created with a vision to bridge this gap. 
          We bring together intergenerational Tamil-origin tutors in the U.S. 
          and other countries with children in rural schools to create meaningful tutor-student partnerships. 
          This is not just about learning grammar — it is about building confidence, curiosity, and a love for communication.
        </p>
      </div>
      <div  ref={ourApproach} className='AboutCard'>
        <h2 className='AboutCard-title'>Our Approach</h2>
        <p className='AboutCard-body'>Seeds of Success is a 1-on-1 tutoring program that is structured yet flexible to ensure both access and quality.  Our approach includes:</p>
        <ul className='AboutCard-body'>
          <li>Partnering with local schools & NGOs in Tamil Nadu - Collaborating with trusted organizations to identify rural children most in need.</li>
          <li>Recruiting & Training Tutors – Highly selective recruitment and training in teaching strategies, cultural sensitivity, and practical English confidence building.</li>
          <li>Providing Ongoing Adult Volunteer Support – Ensuring smooth communication, scheduling, and oversight for both tutors and students for as long as it is needed.</li>
          <li>Tailored Learning Materials – Customized lesson plans adapted to skill level, balancing grammar and practical English with visuals and role-plays.</li>
          <li>Cultural Connection & Confidence Building – Creating interactive lessons that bridge Tamil and global cultures.</li>
          <li>Progress Tracking & Feedback Loops – Regular assessments, regular feedback, and continuous improvement for accountability and growth.</li>
        </ul>
      </div>
      <div ref={ourMission} className='AboutCard'>
        <h2 className='AboutCard-title'>Our Mission</h2>
        <p className='AboutCard-body'>Our mission is to equip rural Tamil Nadu children with practical English skills through supportive 1-on-1 sessions with Tamil-origin tutors abroad, 
          building confidence and nurturing pride in cultural roots for both tutors and students.
        </p>
      </div>
      <div ref={ourImpact} className='AboutCard'> 
        <h2 className='AboutCard-title'>Our Impact</h2>
        <p className='AboutCard-body'>Every tutoring session is a small step toward a bigger change — a child who can speak with confidence, a family uplifted from cycles of poverty,
            a tutor who feels more connected to their roots, and a community that grows stronger.
        </p>
      </div>
      </div>
      <div className='abt-text-container'>
        <p>Bridging language barriers to foster global connection and empower every child with limitless possibilities.</p>
      </div>
    </div>
  </>
  );
}