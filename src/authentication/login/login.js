import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import login from '../../assets/images/login.png'
import Registration from "../registration/registration";
function Login() {
    return (
        <Router>
            <Switch>
                <Route exact path='/registration'><Registration /></Route>
                <Route exact path='/authentication'>
                    {/* login section */}
                    <div className="d-flex flex-direction-row justify-around login-section fade">
                        <div className="image-container">
                            <img src={login} width="650px" height="550px" alt='loginimage' />
                        </div>
                        <div className="login-container">
                            <div className="d-flex justify-center login-header font-oswald">Welcome back</div>
                            <form className="d-flex flex-direction-column w-100" onSubmit={signIn}>
                                <div className="d-flex flex-direction-column">
                                    <input type="email" id="email" name="email" placeholder="Username / Email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" required />
                                    <input type="password" id="password" name="password" placeholder="Password"
                                        minLength="8" required />
                                </div>
                                <div className="d-flex flex-direction-column align-items-center">
                                    <button className="btn login-btn" type="submit">Sign in</button>
                                    <br />
                                    <p>Don't have an account yet? <Link className='link-style'
                                        to="/registration">Register</Link> here</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    )


    function signIn(event) {
        debugger;
        event.preventDefault();
        var emailValue = document.getElementById('email').value;
        if (emailValue) {
            if (emailValue === 'admin@instawash.com') {
                 window.location = '/admin'
            }
            else if (emailValue === 'manager@instawash.com') {
                 window.location = '/manager'
            } else if (emailValue === 'user@instawash.com') {
                window.location = '/user'
            } else {
                window.location = '/visitor'
            }
        }
    }
}

export default Login;