import React from 'react'


const Experience = ({setRole,setCompany,setYear,setPlace,setExplain,handleProjectClick,setSecondExperience,secondExperience} ) => {
  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }
  const handleCompanyChange = (e) => {
    setCompany(e.target.value)
  }
  const handleYearChange = (e) => {
    setYear(e.target.value)
  }
  const handlePlaceChange = (e) => {
    setPlace(e.target.value)
  }
  const handleExplainChange = (e) => {
    setExplain(e.target.value)
  }
  return (
    <form class="row g-3" style={{marginLeft:"5rem",marginRight:"5rem"}} >
      <h3>Experience:</h3>
 
  <div class="col-12">
    <label for="inputAddress" class="form-label">What was your role at Company?</label>
    <input onChange={handleRoleChange} type="text" class="form-control" id="inputAddress" placeholder="Web Developer"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">For which Company did you work?</label>
    <input onChange={handleCompanyChange} type="text" class="form-control" id="inputAddress2" placeholder="Google"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">How long were you with the Company? (in years)</label>
    <input onChange={handleYearChange} type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Where was the Company located?</label>
    <input onChange={handlePlaceChange} type="data" class="form-control" id="inputCity"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">What did you do at Company?</label>
    <input onChange={handleExplainChange} type="text" class="form-control" id="inputAddress" placeholder=""/>
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
    <button onClick={handleProjectClick} type="submit" class="btn btn-primary">Next</button>
  </div>
</form>
  )
}

export default Experience
