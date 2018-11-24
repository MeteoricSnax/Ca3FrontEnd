import React, { Component } from 'react';

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
        <div className="ml-auto">
          <form onSubmit={this.login} onChange={this.onChange} className="form-inline">
            <div className="input-group ">
              <input placeholder="User Name" id="username" className="form-control" />
              <input type="password" placeholder="Password" id="password" className="form-control"/>
              <div className="input-group-append">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      )
    }
}
export default LogIn;