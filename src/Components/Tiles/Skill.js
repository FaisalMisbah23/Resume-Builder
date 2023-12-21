import React from 'react'

const Skill = ({setSkills,handleSummaryClick}) => {
  const handleSkillChange = (e) => {
    setSkills(e.target.value)
  }
  return (
    <>
    
    <form class="row g-3" style={{marginLeft:"5rem",marginRight:"5rem"}} >
      <h3>Skills:</h3>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Enter the Skill you possess</label>
      <input onChange={handleSkillChange} type="text" class="form-control" id="inputAddress" placeholder="Java Script"/>
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
      <button onClick={handleSummaryClick} type="submit" class="btn btn-primary">Next</button>
    </div>
  </form>
  </>
  )
}

export default Skill
