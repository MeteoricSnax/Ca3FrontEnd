import React from 'react';
import { Link } from "react-router-dom";
import LogIn from "./Login";
import cart from './shoppingCart';

const Header = (props) => {
  return (
    !props.loggedIn ? (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul><LogIn login={props.login} />
      </nav>
    ) : (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/candy">View Candy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart <span className="badge badge-success">{cart.getWeight()}g</span></Link>
            </li>
          </ul>
          <button onClick={props.logout} className="btn btn-primary ml-auto">Logout</button>
        </nav>
      )
  );
}
export default Header;