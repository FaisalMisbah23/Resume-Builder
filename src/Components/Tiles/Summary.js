import React from 'react'

const Summary = ({setSummary,handleFinalClick} ) => {
  const setSummaryClick = (event) => {
    setSummary(event.target.value);
    };
  return (
    <>
    
    <form class="row g-3" style={{marginLeft:"5rem",marginRight:"5rem"}} >
      <h3>Summary:</h3>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Write a professional Summary</label>
      <input onChange={setSummaryClick} type="text" class="form-control" id="inputAddress" placeholder=""/>
    </div>
    
  
    <div class="col-12">
      <button onClick={handleFinalClick} type="submit" class="btn btn-primary">Next</button>
    </div>
  </form>
  </>
  )
}

export default Summary
