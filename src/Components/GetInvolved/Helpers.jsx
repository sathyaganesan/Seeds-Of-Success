import { NavLink } from "react-router-dom";

export default function Helpers() {
    return(
    <div className="main-container">
      <div className="bottom-link-container">
        <NavLink to = '/tutors' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a tutuor
        </NavLink>
        <NavLink to = '/coordinators-mentors' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a Mentor/ Coordinator
        </NavLink>
        <NavLink to = '/curriculum-developers' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a Curriculum Developer
        </NavLink>
        <NavLink to = '/technology-implementors' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Become a Technology Implementor
        </NavLink>
      </div>
      <div>
        <div>
          <h1 className="tutor-title">Be part of: Our Well-Oiled Machine Crew</h1>
        </div>
        <section className='list-container'>
          <h3 className="para-title">Behind the scenes helpers: ​</h3>
          <ul className="tutor-list">
            <li>Story book readers</li>
            <li>Homework helpers</li>
            <li>Scheduling helpers (coordinate schedules with student & tutors)</li>
            <li>Organize and maintain Google Drive</li>
          </ul>
          <h3 className="para-title">Time Commitment: </h3>
          <ul className="tutor-list">
            <li>Variable and flexible (whatever you can offer)</li>
          </ul>
        </section>
      </div>
    </div>
    );
}