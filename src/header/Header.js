import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import hamBurger from '../assets/images/hmaburger-menu.png'
import './Header.css';
import Home from '../home/Home';
import React from 'react';
import Authentication from '../authentication/authentication';
import Registration from '../authentication/registration/registration';
import Admin from '../administration/admin/admin';
import Manager from '../administration/manager/manager';
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
              <Link className="nav-Link" to="./contactus">Contact</Link>
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
      <header className="d-flex justify-between menu-header" style={{ display: 'none' }}>
        <div className="header-title d-flex justify-between"><img alt='hamburger menu icon' className="logo font-oswald cursor-pointer" src={hamBurger} height="45px" width="45px" onClick={showSideNav} />
          <div className="header-title d-flex"><a className="logo font-oswald" href="./index.html">InstaWash</a></div></div>
        <div className="side-bar-navigation fade" id="side-bar-navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/authentication">Login / Register</Link></li>
          </ul>
        </div>
      </header>
      <Switch>
        <Route exact path='/'><Home /></Route>
        {/* <Route path='/about'></Route>
        <Route path='/services'></Route>
        <Route path='/contact'></Route> */}
        <Route exact path='/authentication'><Authentication/></Route>
        <Route exact path='/registration'><Registration/></Route>
        <Route exact path='/admin'><Admin/></Route>
        <Route exact path='/manager'><Manager/></Route>
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
