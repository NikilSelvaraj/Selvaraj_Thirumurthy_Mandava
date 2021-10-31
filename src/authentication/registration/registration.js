import React from "react";
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import signup from '../../assets/images/signup.png'
import Authentication from "../authentication";
function Registration() {
    return (
        <Router>
        <Switch>
        <Route exact path='/registration'>
        {/* registration section */}
        <div className="d-flex flex-direction-row justify-around registration-section fade">
            <div className="registration-container">
                <div className="d-flex justify-center registration-header font-oswald">Create an account</div>
                <form className="d-flex flex-direction-column w-100" method="post" encType="text/html">
                    <div className="d-flex flex-direction-column">
                        <div className="d-flex flex-direction-row justify-around">
                            <input type="text" className="name-input" id="fname" name="fname" placeholder="First Name" />
                            <input type="text" className="name-input" id="lname" name="lname" placeholder="Last Name" />
                        </div>
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" />
                    </div>
                    <div className="d-flex flex-direction-column align-items-center">
                        <button className="btn register-btn" type="submit">Sign up</button>
                        <br />
                        <p>Already have an account? <Link className='link-style'
                            to="/authentication">Login</Link> here</p>
                    </div>
                </form>
            </div>
            <div className="image-container">
                <img src={signup} width="550px" height="500px" alt="registrationimage"/>
            </div>
        </div>
        </Route>
        <Route exact path='/authentication'><Authentication/></Route>
        </Switch>
        </Router>
    )
}

export default Registration;