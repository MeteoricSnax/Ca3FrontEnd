import React, { Component } from "react"
import facade from "./apiFacade";
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";
import AppClientPagination from './AppClientPagination.js';
//import Header from './Header.js';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.login} onChange={this.onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}
class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!" };
  }
  componentDidMount() {
    facade.fetchData().then(res => this.setState({ dataFromServer: res }));
  }
  render() {
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>
      </div>
    )
  }
}
const Home = () => <div className="container"><h3>Home</h3></div>;

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      !this.props.loggedIn ? (<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <LogIn login={this.props.login} />
          </li>
        </ul>
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
          <li className="nav-item">
            <button onClick={this.props.logout} className="btn btn-primary">Logout</button>
          </li>
        </ul>
      </nav>)
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    facade.loggedIn() === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }
  componentDidMount() {
    this.setState({
      loggedIn: facade.loggedIn()
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header loggedIn={this.state.loggedIn} logout={this.logout} login={this.login} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/user" component={LoggedIn} />
          <PrivateRoute exact path="/pagination" component={AppClientPagination} />
        </div>
      </Router>
    )
  }
}
export default App;
