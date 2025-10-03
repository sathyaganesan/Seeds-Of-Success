import React, { useRef, useCallback } from 'react';
import '../CSS/About.css';

function About() {

  const paragraphRef = useRef(null);
  const ourStory = useRef(null);

  const scrollToParagraph = useCallback(() => {
    paragraphRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToourStory = useCallback(() => {
    ourStory.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);


  return (
  <>
    <div >
      <div className='btn-block'>
        <div>
          <h2>About</h2>
        </div>
        <div>
          <button className='btn' onClick={scrollToourStory} >Our Story</button>
          <button className='btn' onClick={scrollToParagraph} >Our Approach</button>
          <button className='btn' onClick={scrollToParagraph} >Our Mission</button>
          <button className='btn' onClick={scrollToParagraph} >Our Impact</button>
        </div>
      </div>
      <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <p>Scroll down to see the button in action.</p>
      </div>
        <div ref={ourStory}>
          <h2>Our Story</h2>
          <p>Many children in rural Tamil Nadu face severe challenges when learning English.
           Only 1 in 4 fifth graders can read and write simple English sentences. 
           For them, English remains a subject of theory rather than a usable practical skill. 
           This gap makes them lose confidence and limits their opportunities for higher education, jobs, 
           and connection with the wider world.
          </p>
          <p>Seeds of Success is a youth-led, registered nonprofit in Virginia, created with a vision to bridge this gap. 
            We bring together intergenerational Tamil-origin tutors in the U.S. 
            and other countries with children in rural schools to create meaningful tutor-student partnerships. 
            This is not just about learning grammar — it is about building confidence, curiosity, and a love for communication.
          </p>
        </div>
        <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <p>Scroll down to see the button in action.</p>
       </div>
        <div ref={paragraphRef}>
          <h2>Our Approach</h2>
          <p>Many children in rural Tamil Nadu face severe challenges when learning English.
           Only 1 in 4 fifth graders can read and write simple English sentences. 
           For them, English remains a subject of theory rather than a usable practical skill. 
           This gap makes them lose confidence and limits their opportunities for higher education, jobs, 
           and connection with the wider world.
          </p>
          <p>Seeds of Success is a youth-led, registered nonprofit in Virginia, created with a vision to bridge this gap. 
            We bring together intergenerational Tamil-origin tutors in the U.S. 
            and other countries with children in rural schools to create meaningful tutor-student partnerships. 
            This is not just about learning grammar — it is about building confidence, curiosity, and a love for communication.
          </p>
        </div>
    </div>
  </>
  );
}
export default About;