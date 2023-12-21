import React from 'react';
import './ResumeBuilder.css';


   
const Finish = ({name,email,phoneNumber,linkidinfo,pswebsite,country,state,city,summary,role,company,year,place,explain
                ,degree,gpa,location,institute,expectedDate,additionalInfo,
                school,certification,certificateyear,relevantcourse,
                title,organization,projectDate,projectUrl,skills
                
}) => {

  
  

  return (
   <div className='main'>
<div className="contact">
  <div className="name">{name}</div>
  <div className="email"> {city}, {state}, {country} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> {email} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> {phoneNumber}  </div>
<div className="linkidin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg> {linkidinfo}</div>
<div className="Pswebsite"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg> {pswebsite}</div>
</div>
<hr className='light' />
<div className="summary">
  <h3>Summary</h3>
  <hr className='dark' />
  {summary}
</div>
<div className="experience">
  <hr className="light" />
  <h3>Experience</h3>
  <hr className="dark" />
  <h5>{role} </h5>
  <div className="item">
  <h6>{company}</h6> 
  <h6>{year}  {place}</h6>
  </div>
  <div className="explain">
    <ul>
      <li>
      {explain}
      </li>
    </ul>
  </div>
  
</div>

<div className="education">
  <hr className="light" />
  <h3>Education</h3>
  <hr className="dark" />
  <h5>{degree}  </h5>


<h6>{institute} {location} {expectedDate} {gpa} </h6>
  <div className="explain">
    <ul>
      <li>
      {additionalInfo}
      </li>
    </ul>
  </div>
  
</div>

<div className="projects">
  <hr className="light" />
  <h3>Projects</h3>
  <hr className="dark" />
  <h5> {title}  </h5>


<h6> {organization} {projectUrl} </h6>
<h6>{projectDate}  </h6>
</div>


<div className="certification">
  <hr className="light" />
  <h3>Certification</h3>
  <hr className="dark" />
  <h5> {certification}   </h5>


<h6> {school} {certificateyear} </h6>
  <div className="explain">
    <ul>
      <li>
      {relevantcourse}
      </li>
    </ul>
  </div>
</div>


<div className="skills">
  <hr className="light" />
  <h3>Skills</h3>
  <hr className="dark" />
  <h5> {skills} </h5>

</div>

   </div>
  )
  }
  export default Finish;
  
