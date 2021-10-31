import React from 'react'
import './registerIncident.css'
function RegisterIncident () {
    return (
        <div>
            <div id="registerIncident" className="info-content">
            <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader">Register Incident and
        Requests</div>
      <div className="form">
        <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post"
          enctype="text/plain">
          <div className="d-flex flex-direction-column register-container">
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="fname" name="fname" placeholder="First Name" required/>
              <input type="text" id="lname" name="lname" placeholder="Last Name" required/>
            </div>
            <div className="d-flex flexdirection-row justify-center media">
              <input type="text" id="email" name="email" placeholder="Email" required/>
              <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required/>
            </div>
            <div className="d-flex flexdirection-row justify-center media">
              <select name="register" id="register" className="font-roboto registerSelect" required>
                <option hidden selected>Select one...</option>
                <option value="Incident">Register an Incident</option>
                <option value="Request">Register a Request</option>
              </select>
            </div>
            <div className="d-flex flexdirection-row justify-center media ">
              <textarea id="query" className="font-roboto registerTextArea" name="query"
                placeholder="Enter your query"></textarea>
            </div>
            <div className="d-flex w-100 flexdirection-row justify-center   ">
              <button className="btn clear" type="reset">Clear</button>
              <button className="btn submit" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}
export default RegisterIncident