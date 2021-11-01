import React from 'react'
import './scheduleDrop.css'
function ScheduleDrop() {
    return (
        <div>
            <div id="ScheduleDrop" className="info-content">
                <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Schedule a Drop</div>
                <div className="form">
                    <form className="d-flex flex-direction-columan w-100 justify-center sideNavHeader schedule-form" action="#" method="post">
                        <div className="d-flex flex-direction-column schedule-container">
                            <div className="d-flex flex-direction-row justify-center media">
                                <input type="text" id="fname" name="fname" placeholder="First Name" required />
                                <input type="text" id="lname" name="lname" placeholder="Last Name" required />
                            </div>
                            <div className="d-flex flexdirection-row justify-center media">
                                <input type="text" id="email" name="email" placeholder="Email" required />
                                <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
                            </div>
                            <div className="d-flex flexdirection-row justify-center schedule-dropoff media">
                                <div className="schedule d-flex align-items-center">Please Select a Drop Off Time</div>
                                <div className="d-flex justify-between">
                                    <input type="date" id="start" name="start" value="2021-10-01" min="2021-10-01" max="2030-12-31"
                                        className="dayTime" required />
                                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" className="dayTime" required />
                                </div>
                            </div>
                            <div className="d-flex flex-direction-row justify-center">
                                <select name="service" id="service" className="font-roboto" required>
                                    <option hidden selected>Select Required Service</option>
                                    <option value="Washing">Washing</option>
                                    <option value="Drying">Drying</option>
                                    <option value="Ironing">Ironing</option>
                                    <option value="Complete Laundry Service">Complete Laundry Service (Washing+Drying+Ironing)</option>
                                </select>
                            </div>
                            <div className="d-flex w-100 flexdirection-row justify-center">
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
export default ScheduleDrop