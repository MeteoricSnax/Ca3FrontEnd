import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from './App.js';
/*
class Header extends Component {
    constructor(props) {
      super(props);
    }
    render(){
      return(
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/user">User</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/pagination">Pagination</Link>
              </li>
              <li className="nav-item">
                  {!this.props.loggedIn ? (<LogIn login={this.props.login} />) :
                   (<div><button onClick={this.props.logout}>Logout</button></div>)}
              </li>
          </ul>
      </nav>);
      }
  }

  export default Header;*/