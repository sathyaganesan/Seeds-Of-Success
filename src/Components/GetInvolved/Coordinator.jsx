import React from "react";

export default function Coordinator() {
    return(
    <>
      <div>
        <div>
          <h1 className="tutor-title"> Your Role as a Coordinator</h1>
          <h3 className='margin'>Adult coordinators help student tutors run their sessions smoothly</h3>
        </div>
        <section className='list-container'>
          <h3 className="para-title">Prerequisites: ​</h3>
            <ul className="tutor-list">
              <li>Proficient in reading, writing, and speaking Tamil.</li>
              <li>Familiar with Tamil culture — able to understand local customs and context, so lessons stay respectful and relatable.</li>
            </ul>
          <h3 className="para-title">Responsibilities: </h3>
            <ul className="tutor-list">
              <li>Be present in all tutoring sessions with student tutors.</li>
              <li>Troubleshoot technology and curriculum challenges during sessions.</li>
              <li>Help smooth communication when needed - with students, parents, and school staff.</li>
              <li>Help tutors adapt when challenges arise</li>
              <li>Encourage and reassure students</li>
              <li>Provide emotional and logistical support to both tutor and student.</li>
              <li>If this role interests you, there will be a follow-up orientation session to attend. </li>
            </ul>
          <h3 className="para-title">Time Commitment: </h3>
            <ul className="tutor-list">
              <li>Minimum of 1 hours/week/student (can be in multiple sessions).</li>
            </ul>
        </section>
        
    </div>
    </>
    );
}