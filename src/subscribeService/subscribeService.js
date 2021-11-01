import React from 'react'
import './subscribeService.css'
function SubscribeService() {
    return(
        <div>
        <div id="subscribeService" className="info-content">
      <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Subscribe to a Service
      </div>
      <div className="form">
        <form className="d-flex flex-direction-column w-100 align-items-center subscribe-form" action="#" method="post"
          enctype="text/plain">
          <div className="d-flex flex-direction-column subscribe-container">
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="fname" name="fname" placeholder="First Name" required/>
              <input type="text" id="lname" name="lname" placeholder="Last Name" required/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="email" name="email" placeholder="Email" required/>
              <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <select name="subscribe" id="subscribe" className="font-roboto subscribeSelect" required>
                <option hidden selected>Services</option>
                <option value="Pick Up">Pick Up</option>
                <option value="Delivery">Delivery</option>
                <option value="PickUpDelivery">Pick Up and Delivery</option>
              </select>
              <select name="plan" id="plan" className="font-roboto subscribeSelect">
                <option hidden selected>Subscription Type</option>
                <option value="1">Weekly Once</option>
                <option value="2">Once every two weeks</option>
                <option value="3">Montly</option>
              </select>
              <select name="day" id="day" className="font-roboto subscribeSelect">
                <option hidden selected>Select Prefered Day</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="address" name="address" placeholder="Address" required/>
              <input type="text" id="city" name="city" placeholder="City" required/>
              <input type="text" id="State" name="State" placeholder="State" required/>
            </div>
            <div className="d-flex w-100 flexdirection-row justify-center subscribeButton">
              <button className="btn clear" type="reset">Clear</button>
              <button className="btn subscribe" type="submit">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
}
export default SubscribeService