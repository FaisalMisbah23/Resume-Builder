import React from 'react';


const Contact = ({ setName,setEmail,setPhoneNumber, setLinkidinfo,setPswebsite,setCountry,setCity,setState,handleExperienceClick }) => {


  const setNameClick = (event) => {
  setName(event.target.value);
  };
  const setEmailClick = (event) => {
  setEmail(event.target.value);
  };
  const setPhoneNumberClick = (event) => {
  setPhoneNumber(event.target.value);
  };
  const setLinkidinfoClick = (event) => {
  setLinkidinfo(event.target.value);
  };
  const setPswebsiteClick = (event) => {
  setPswebsite(event.target.value);
  };
  const setCountryClick = (event) => {
  setCountry(event.target.value);
  };
  const setStateClick = (event) => {
  setState(event.target.value);
  };
  const setCityClick = (event) => {
  setCity(event.target.value);
  }

  return (
    <>


    <form className="row g-3" style={{marginLeft:"5rem",marginRight:"5rem"}} >
      <h3>Contact:</h3>
  <div className="col-md-6">
    <label  for="inputEmail4" className="form-label">Full Name</label>
    <input onChange={setNameClick}  type="name" className="form-control" id="inputEmail4"/>
  </div>
  
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Email Address</label>
    <input onChange={setEmailClick} type="email" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Phone Number</label>
    <input onChange={setPhoneNumberClick} type="text" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Linkdin Url</label>
    <input onChange={setLinkidinfoClick} type="text" className="form-control" id="inputPassword4"/>
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Personal Website</label>
    <input onChange={setPswebsiteClick} type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Country</label>
    <input onChange={setCountryClick} type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">State</label>
    <input onChange={setStateClick} type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input onChange={setCityClick} type="city" className="form-control" id="inputCity"/>
  </div>
 
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Save info
      </label>
    </div>
  </div>
  <div className="col-12">
    <button onClick={handleExperienceClick} type="submit" className="btn btn-primary">Next</button>
  </div>
</form>

</>
  )
}

export default Contact
