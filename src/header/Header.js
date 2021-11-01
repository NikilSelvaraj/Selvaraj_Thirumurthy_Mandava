import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import hamBurger from '../assets/images/hmaburger-menu.png'
import './Header.css';
import Home from '../home/Home';
import React from 'react';
import Authentication from '../authentication/authentication';
import Registration from '../authentication/registration/registration';
import Admin from '../administration/admin/admin';
import Manager from '../administration/manager/manager';
import ContactUs from  '../contactus/contactUs'
import About from '../about/about';
import Service from '../services/service';
import User from '../user/user';
import Visitor from '../visitor/visitor';
function Header() {
  return (
    <Router>
    {/* navigation bar and links */}
    <header className="d-flex justify-between nav-header">
    <div className="header-title d-flex"><Link className="logo font-oswald" to="/">InstaWash</Link></div>
    <nav className="navbar">
      <ul className="d-flex justify-around flex-direction-row">
        <li className="nav-item active">
          <Link className="nav-Link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/contactus">Contact</Link>
        </li>
        <li className="nav-item">
          <a className="nav-Link" href="http://nxs4184.uta.cloud/Selvaraj_Thirumurthy_Mandava/src/blog/">Blog</a>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/authentication">Login/Register</Link>
        </li>
        <form className="form-inline search-control  d-flex align-items-center">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn" type="submit">Search</button>
        </form>
      </ul>
    </nav>
  </header>

  {/* side menu navigation for responsiveness  */}
  <header class="d-flex justify-between menu-header" style={{display: 'none'}}>
    <div class="header-title d-flex justify-between"><img alt='hamburger menu icon' class="logo font-oswald cursor-pointer" src= {hamBurger} height="45px" width="45px" onClick={showSideNav}/> 
      <div class="header-title d-flex"><a class="logo font-oswald" href="./index.html">InstaWash</a></div></div>
    <div class="side-bar-navigation fade" id="side-bar-navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><a href='http://nxs4184.uta.cloud/Selvaraj_Thirumurthy_Mandava/src/blog/'></a></li>
        <li><Link to="/authentication">Login / Register</Link></li>
      </ul>
    </div>
  </header>
  <Switch>
      <Route exact path='/'><Home/></Route> 
      <Route exact path='/about'><About/></Route>
      <Route exact path='/services'><Service/></Route>
      <Route exact path='/contactus' component={ContactUs}></Route>
      <Route exact path='/authentication'><Authentication/></Route>
      <Route exact path='/registration'><Registration/></Route>
      <Route exact path='/admin'><Admin/></Route>
      <Route exact path='/manager'><Manager/></Route>
      <Route exact path='/user'><User/></Route>
      <Route exact path='/visitor'><Visitor/></Route>
  </Switch>
  </Router>
  );

  function showSideNav() {
    let displayValue = document.getElementById('side-bar-navigation').style.display;
    if (displayValue === 'none' || displayValue === '') { document.getElementById('side-bar-navigation').style.display = 'flex'; } else {
      document.getElementById('side-bar-navigation').style.display = 'none';
    }
  }
}

export default Header;
