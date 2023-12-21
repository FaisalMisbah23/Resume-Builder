import React from 'react'

const Projects = ({
  setTitle
,setOrganization
,setProjectDate
,setProjectUrl,
handleEducatonClick
} ) => {
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value)
  }
  const handleProjectDateChange = (e) => {
    setProjectDate(e.target.value)
  }
  const handleProjectUrlChange = (e) => {
    setProjectUrl(e.target.value)
  }
    return (
        
        <form class="row g-3" style={{marginLeft:"5rem",marginRight:"5rem"}} >
     <h3>Projects:</h3>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Give your project a title</label>
        <input onChange={handleTitleChange} type="text" class="form-control" id="inputAddress" placeholder=""/>
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">In which organizaion did do your project?</label>
        <input onChange={handleOrganizationChange} type="text" class="form-control" id="inputAddress2" placeholder=""/>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">When you do you Project? (date)</label>
        <input onChange={handleProjectDateChange} type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Project Url</label>
        <input onChange={handleProjectUrlChange} type="data" class="form-control" id="inputCity"/>
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
        <button onClick={handleEducatonClick} type="submit" class="btn btn-primary">Next</button>
      </div>
    </form>
      )
}

export default Projects
