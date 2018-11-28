import React, { Component } from "react";
import facade from "./apiFacade";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import ViewItems from './ViewItems.js';
import CandyDetails from "./CandyDetails";
import Header from "./Header";
import ViewUser from "./User";
import ViewCart from './ViewCart';
import Home from './Home';
import cart from './shoppingCart';

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
    this.state = { loggedIn: false, cart: [] }
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
  updateCart = () => {
    this.setState({
      cart: cart.getCart()
    });
  }

  // <PrivateRoute path="/cart" render={(props) => <ViewCart {...props} updateCart={this.updateCart}></ViewCart>} />
  render() {
    return (
      <Router>
        <div>
          <Header loggedIn={this.state.loggedIn} logout={this.logout} login={this.login} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/user" component={ViewUser} />
          <PrivateRoute exact path="/candy" component={ViewItems} />
          <PrivateRoute path="/candy/:id" component={CandyDetails} />
          <PrivateRoute path="/cart" component={ViewCart} />
        </div>
      </Router>
    )
  }
}
export default App;
