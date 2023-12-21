import React from 'react'

const Certification = ({setSchool,
  setCertificateyear,
  setRelevantcourse,
  setCertificate,
  handleSkillClick
} ) => {
  const handleSchoolChange = (e) => {
    setSchool(e.target.value)
  }
  const handleCertificateyearChange = (e) => {
    setCertificateyear(e.target.value)
  }
  const handleRelevantcourseChange = (e) => {
    setRelevantcourse(e.target.value)
  }
  const handleCertificateChange = (e) => {
    setCertificate(e.target.value)
  }
  return (
    <>
    
    <form class="row g-3" style={{marginLeft:"5rem",marginRight:"5rem"}} >
      <h3>Certifications:</h3>
    <div class="col-12">
      <label for="inputAddress" class="form-label">What was the certificate name?</label>
      <input onChange={handleCertificateChange} type="text" class="form-control" id="inputAddress" placeholder=""/>
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Where did you get the certificate? </label>
      <input onChange={handleSchoolChange} type="text" class="form-control" id="inputAddress2" placeholder=""/>
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">When did you get the certificate?</label>
      <input onChange={handleCertificateyearChange} type="text" class="form-control" id="inputAddress2" placeholder=""/>
    </div>

    <div class="col-12">
      <label for="inputAddress2" class="form-label">How this certificate is relevant?</label>
      <input onChange={handleRelevantcourseChange} type="text" class="form-control" id="inputAddress2" placeholder=""/>
    </div>
  
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"/>
        <label class="form-check-label" for="gridCheck">
          Save info
        </label>
      </div>
    </div>
    <div class="col-12">
      <button onClick={handleSkillClick} type="submit" class="btn btn-primary">Next</button>
    </div>
  </form>
  </>
  )
}

export default Certification
