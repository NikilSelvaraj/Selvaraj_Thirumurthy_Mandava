import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import signup from '../../assets/images/signup.png'
import Authentication from "../authentication";
import axios from 'axios';
function Registration() {
    const [state, setState] = useState({});
    const [registrationInfo, setRegistrationInfo] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    function handleChange(event) {
        const { name, value } = event.target;
        setRegistrationInfo({ ...registrationInfo, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_PATH + '/registerUser.php',
            headers: {
                'content-type': 'application/json'
            },
            data: registrationInfo
        })
            .then(result => {
                console.log(result.data)
                setState({
                    dataSent: result.data.sent,
                });
            })
            .catch(error => {
                setState({
                    error: error.message
                });
                console.log(state['error']);
            });
    }
    return (
        <Router>
            <Switch>
                <Route exact path='/registration'>
                    {/* registration section */}
                    <div className="d-flex flex-direction-row justify-around registration-section fade">
                        <div className="registration-container">
                            <div className="d-flex justify-center registration-header font-oswald">Create an account</div>
                            <form className="d-flex flex-direction-column w-100" onSubmit={onSubmit}>
                                <div className="d-flex flex-direction-column">
                                    <div className="d-flex flex-direction-row justify-around">
                                        <input type="text" className="name-input" id="fname" name="firstName" placeholder="First Name" maxLength="60"
                                            required value={registrationInfo['firstName']} onChange={handleChange} />
                                        <input type="text" className="name-input" id="lname" name="lastName" placeholder="Last Name" maxLength="60"
                                            required value={registrationInfo['lastName']} onChange={handleChange} />
                                    </div>
                                    <input type="email" id="email" name="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        value={registrationInfo['email']} onChange={handleChange} />
                                    <input type="password" id="password" name="password" placeholder="Password" required minLength='8'
                                        value={registrationInfo['password']} onChange={handleChange} />
                                    <input type="password" id="confirm_password" name="confirmPassword" placeholder="Confirm Password" required minLength='8'
                                        value={registrationInfo['confirmPassword']} onChange={handleChange} />
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
                            <img src={signup} width="550px" height="500px" alt="registrationimage" />
                        </div>
                    </div>
                </Route>
                <Route exact path='/authentication'><Authentication /></Route>
            </Switch>
        </Router>
    )
}

export default Registration;