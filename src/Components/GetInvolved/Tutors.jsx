import { NavLink } from "react-router-dom";
import '../../CSS/GetInvolved/Tutors.css';

export default function Tutors() {
  return(
    <div className="main-container">
      <div className="bottom-link-container">
        <NavLink to = '/coordinators-mentors' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a Mentor/ Coordinator
        </NavLink>
        <NavLink to = '/curriculum-developers' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a Curriculum Developer
        </NavLink>
        <NavLink to = '/technology-implementors' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a Technology Implementor
        </NavLink>
        <NavLink to = '/behind-the-scene-helpers' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Behind the Scene Helpers
        </NavLink>
      </div>
      <div>
        <div>
          <h1 className="tutor-title"> Your Role as a Tutor</h1>
          <h3 className='margin'>Tutors are the heart and backbone of this program</h3>
        </div>
        <section className='list-container'>
          <h3 className="para-title">Prerequisites: ​</h3>
            <ul className="tutor-list">
              <li>Must be fluent in Tamil.</li>
              <li>Passionate about helping kids learn and grow.</li>
              <li>Ready to commit time and energy to making a difference.</li>
            </ul>
          <h3 className="para-title">Responsibilities: </h3>
            <ul className="tutor-list">
              <li>Conduct engaging English lessons based on our standardized curriculum for your student.</li>
              <li>Use Tamil strategically to explain concepts and build rapport.</li>
              <li>Encourage student participation and curiosity.</li>
              <li>Ask for help when needed from the adult coordinator (applies to student tutors)</li>
              <li>Adapt/refine teaching methodology to benefit students.</li>
              <li>Keep track of time, flow, lessons taught.</li>
              <li>If this role interests you, there will be a follow-up orientation session to attend. </li>
            </ul>
          <h3 className="para-title">Time Commitment: </h3>
            <ul className="tutor-list">
              <li>Minimum of 1 - 1.25 hours/week . This includes tutoring session (1 hour) + any homework help (~.25). Any more time offered is beneficial for the student.</li>
            </ul>
        </section>
    </div>
    </div>
  );
}