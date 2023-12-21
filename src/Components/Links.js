import React from "react";
import "./Style.css";
import handleContactClick from '../App'

const Links = () => {

 
  return (
    <div className="tiles">
      <a onClick={handleContactClick} className="link" href="/CONTACT">CONTACT </a>
      <a className="link" href="/EXPERIENCE"> EXPERIENCE</a>
      <a className="link" href="/PROJECT">PROJECT</a>
      <a className="link" href="/EDUCATION">EDUCATION</a>
      <a className="link" href="/CERTIFICATION">CERTIFICATION</a>
      <a className="link" href="/SCOURSEWORK">SCOURSEWORK</a>
      <a className="link" href="/INVOLVEMENT">INVOLVEMENT</a>
      <a className="link" href="/SKILLS">SKILLS</a>
      <a className="link" href="/SUMMARY">SUMMARY</a>
      <a className="link" href="/FINISH">FINISH</a>
    </div>
  );
};

export default Links;
