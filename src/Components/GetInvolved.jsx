import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/getInvolved.css';

export default function GetInvolved() {
  return(
<>
  <div>
    <h1 className="page-title"> Support Us </h1>
  </div>
  <div className="main-container">
    <div className="link-container">
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
      <NavLink to = '/behind-the-scene-helpers' className={({ isActive }) => isActive ? "involved-link active" : "involved-link"}>
        Behind the Scene Helpers
      </NavLink>
    </div>
    <div className="text-container">
      <p>
        Our goal for 2025 is to expand to teach as many kids as possible from rural Tamil Nadu. 
        ​It takes many hearts and helping hands to run a program like this and to achieve our goals — 
        tutors, coordinators, technology helpers, curriculum developers, and supporters. 
        Whether you are a student looking to volunteer, a parent who wants to get involved, 
        or a well-wisher who wants to support with resources, you are welcome to be part of this journey.
      </p>
      <p>        
        By partnering with us, you are not just helping teach English. 
        You are connecting cultures, preserving roots, and empowering futures.
      </p>
    </div>
  </div>
</>
    );
}