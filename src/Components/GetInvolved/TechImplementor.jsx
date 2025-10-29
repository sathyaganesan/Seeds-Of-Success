import { NavLink } from "react-router-dom";

export default function TechImplementor() {
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
        <NavLink to = '/behind-the-scene-helpers' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
          Behind the Scene Helpers
        </NavLink>
      </div>
      <div>
        <div>
          <h1 className="tutor-title">Your Role as a Technology Implementor</h1>
        </div>
        <section className='list-container'>
          <h3 className="para-title">Responsibilities: </h3>
          <ul className="tutor-list">
            <li>Assist in building a website</li>
            <li>Create and maintain You tube channel and reels</li>
            <li>Support homework innovation by creating mobile-friendly assignments</li>
            <li>Assist in leveraging AI and other emerging technologies to simplify lesson delivery, create engaging practice tools</li>
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