import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/*
const Header = (props) => {
    return (
      !props.loggedIn ? (<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul><LogIn login={props.login} />
      </nav>) : (<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
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
        </ul>
        <button onClick={props.logout} className="btn btn-primary ml-auto">Logout</button>
      </nav>)
    );
}
  export default Header;*/