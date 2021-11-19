import React, { useState , useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import login from '../../assets/images/login.png'
import Registration from "../registration/registration";
import axios from 'axios';
function Login() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
    });
    const [state,setState] = useState({});
    const [credentials, setCredentials] = useState({username:'',password:'',forgotPassword:false});
    function handleChange(event) {
        const { name, value } = event.target;
        setCredentials({...credentials,[name]:value })
    }

    function onSignin(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_PATH + '/loginUser.php',
            headers: {
                'content-type': 'application/json'
            },
            data: credentials
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
                <Route exact path='/registration'><Registration /></Route>
                <Route exact path='/authentication'>
                    {/* login section */}
                    <div className="d-flex flex-direction-row justify-around login-section fade">
                        <div className="image-container">
                            <img src={login} width="650px" height="550px" alt='loginimage' />
                        </div>
                        <div className="login-container">
                            <div className="d-flex justify-center login-header font-oswald">Welcome back</div>
                            <form className="d-flex flex-direction-column w-100" onSubmit={onSignin}>
                                <div className="d-flex flex-direction-column">
                                    <input type="email" id="email" name="username" placeholder="Email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" required 
                                        value={credentials['username']} onChange={handleChange}/>
                                    <input type="password" id="password" name="password" placeholder="Password"
                                        minLength="8" required value={credentials['password']} onChange={handleChange}/>
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
}

export default Login;