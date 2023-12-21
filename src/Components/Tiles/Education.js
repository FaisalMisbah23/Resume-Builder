import React from "react";

const Education = ({
  setAdditionalInfo,
  setDegree,
  setLocation,
  setGpa,
  setInstitute,
  setExpectedDate,
  handleCertificateClick
}) => {
  const handledegreeChange = (e) => {
    setDegree(e.target.value)
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleGpaChange = (e) => {
    setGpa(e.target.value)
  }
  const handleInstituteChange = (e) => {
    setInstitute(e.target.value)
  }
  const handleExpectedDateChange = (e) => {
    setExpectedDate(e.target.value)
  }
  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value)
  }
  return (
    <>
      <form class="row g-3" style={{ marginLeft: "5rem", marginRight: "5rem" }}>
        <h3>Education:</h3>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            What is you degree?
          </label>
          <input
          onChange={handledegreeChange}
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder=""
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Where did you earn your Bachor in Informaion Technology?{" "}
          </label>
          <input
          onChange={handleInstituteChange}
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Where is the institurion Located?
          </label>
          <input
          onChange={handleLocationChange}
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            When did you earn your Bachor in Informaion Technology?
          </label>
          <input
          onChange={handleExpectedDateChange}
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            GPA (If applicable)
          </label>
          <input
          onChange={handleGpaChange}
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Open field for addition information
          </label>
          <input
          onChange={handleAdditionalInfoChange}
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder=""
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Save info
            </label>
          </div>
        </div>
        <div class="col-12">
          <button onClick={handleCertificateClick} type="submit" class="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Education;
