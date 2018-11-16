import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from './App.js';
import AppClientPagination from './AppClientPagination.js';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={App} />
            <Route exact path="/pagination" component={AppClientPagination} />
        </div>
    </Router>
);
const Home = () => <div className="container"><h3>Home</h3></div>;
const Header = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/pagination">Pagination</Link>
            </li>
        </ul>
    </nav>
);

export default AppRouter;