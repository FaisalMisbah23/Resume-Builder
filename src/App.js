import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import "./style.css";
import Contact from "./Components/Tiles/Contact";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Tiles/Experience";
import Projects from "./Components/Tiles/Projects";
import Education from "./Components/Tiles/Education";
import Certification from "./Components/Certification";
import Skill from "./Components/Tiles/Skill";
import Summary from "./Components/Tiles/Summary";
import Finish from "./Components/Tiles/Finish";

function App() {
  // state
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("ame@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("012345678");
  const [linkidinfo, setLinkidinfo] = useState(
    "https://www.linkedin.com/in/name"
  );
  const [pswebsite, setPswebsite] = useState(
    "https://www.pinterest.com/name"
  );
  const [country, setCountry] = useState("Country");
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");

  const [summary,setSummary]=useState("");

  const [role,setRole]=useState("");
  const [company,setCompany]=useState("")
  const [place,setPlace]=useState("")
  const [year,setYear]=useState("")
  const [explain,setExplain]=useState("")

const [degree,setDegree]=useState("")
const [institute,setInstitute]=useState("")
const [location,setLocation]=useState("")
const [expectedDate,setExpectedDate]=useState("")
const [gpa,setGpa]=useState("")
const [additionalInfo,setAdditionalInfo]=useState("")

const[school,setSchool]=useState("")
const [certification,setCertification]=useState("")
const [certificateyear,setCertificateyear]=useState("")
const [relevantcourse,setRelevantcourse]=useState("")

const [title,setTitle]=useState("")
const [organization,setOrganization]=useState("")
const [projectDate,setProjectDate]=useState("")
const [projectUrl,setProjectUrl]=useState("")

const [skills,setSkills]=useState("")

const [secondExperience, setSecondExperience] = useState("");

  // functios for tiles
  const [show, setShow] = useState(<Home />);
  const handleContactClick = (event) => {
    event.preventDefault();
    setShow(
      <Contact
        setName={setName}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setLinkidinfo={setLinkidinfo}
        setPswebsite={setPswebsite}
        setCountry={setCountry}
        setCity={setCity}
        setState={setState}
        handleExperienceClick={handleExperienceClick}
      />
    );
  };
  const handleExperienceClick = (event) => {
    event.preventDefault();
    setShow(<Experience 
      setRole={setRole}
      setCompany={setCompany}
      setPlace={setPlace}
      setYear={setYear}
      setExplain={setExplain}
      handleProjectClick={handleProjectClick}
      setSecondExperience={setSecondExperience}
      />);
  };
  const handleProjectClick = (event) => {
    event.preventDefault();
    setShow(<Projects
      setTitle={setTitle}
setOrganization={setOrganization}
setProjectDate={setProjectDate}
setProjectUrl={setProjectUrl}
handleEducatonClick={handleEducatonClick}
      />);
  };
  const handleEducatonClick = (event) => {
    event.preventDefault();
    setShow(<Education
      setAdditionalInfo={setAdditionalInfo}
      setDegree={setDegree}
      setLocation={setLocation}
      setGpa={setGpa}
      setInstitute={setInstitute}
      setExpectedDate={setExpectedDate}
      handleCertificateClick={handleCertificateClick}
      />);
  };
  const handleCertificateClick = (event) => {
    event.preventDefault();
    setShow(<Certification

      setSchool={setSchool}
      setCertificateyear={setCertificateyear}
      setRelevantcourse={setRelevantcourse}
      setCertificate={setCertification}
      handleSkillClick={handleSkillClick}
      
      />);
  };
  const handleSkillClick = (event) => {
    event.preventDefault();
    setShow(<Skill
      setSkills={setSkills}
      handleSummaryClick={handleSummaryClick}
      />);
  };
  const handleSummaryClick = (event) => {
    event.preventDefault();
    setShow(<Summary setSummary={setSummary} 
      handleFinalClick={handleFinalClick}
      />);

    
  };
  const handleFinalClick = (event) => {
    event.preventDefault();
    setShow(
      <Finish
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        linkidinfo={linkidinfo}
        setLinkidinfo={setLinkidinfo}
        pswebsite={pswebsite}
        setPswebsite={setPswebsite}
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        state={state}
        setState={setState}
        summary={summary}
        setSummary={setSummary}
        role={role}
        setRole={setRole}
        company={company}
        setCompany={setCompany}
        place={place}
        setPlace={setPlace}
        year={year}
        setYear={setYear}
        explain={explain}
        setExplain={setExplain}
        degree={degree}
        setDegree={setDegree}
        institute={institute}
        setInstitute={setInstitute}
        location={location}
        setLocation={setLocation}
        expectedDate={expectedDate}
        setExpectedDate={setExpectedDate}
        gpa={gpa}
        setGpa={setGpa}
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
        certification={certification}
        setCertificate={setCertification}
        school={school}
        setSchool={setSchool}
        certificateyear={certificateyear}
        setCertificateyear={setCertificateyear}
        relevantcourse={relevantcourse}
        setRelevantcourse={setRelevantcourse}
        title={title}
        setTitle={setTitle}
        organization={organization}
        setOrganization={setOrganization}
        projectDate={projectDate}
        setProjectDate={setProjectDate}
        projectUrl={projectUrl}
        setProjectUrl={setProjectUrl}
        skills={skills}
        setSkills={setSkills}
        secondExperience={secondExperience}
        setSecondExperience={setSecondExperience}
      />
      
    );
  };

  return (
    <>
      <Navbar />

      {show === <Home /> ? null : (
        <div className="tiles">
          <a onClick={handleContactClick} className="link" href="/CONTACT">
            CONTACT
          </a>
          <a
            onClick={handleExperienceClick}
            className="link"
            href="/EXPERIENCE"
          >
            EXPERIENCE
          </a>
          <a onClick={handleProjectClick} className="link" href="/PROJECT">
            PROJECT
          </a>
          <a onClick={handleEducatonClick} className="link" href="/EDUCATION">
            EDUCATION
          </a>
          <a
            onClick={handleCertificateClick}
            className="link"
            href="/CERTIFICATION"
          >
            CERTIFICATION
          </a>
          <a onClick={handleSkillClick} className="link" href="/SKILLS">
            SKILLS
          </a>
          <a onClick={handleSummaryClick} className="link" href="/SUMMARY">
            SUMMARY
          </a>
          <a onClick={handleFinalClick} className="link" href="/FINISH">
            FINISH
          </a>
        </div>
      )}
      {show}
    </>
  );
}

export default App;
