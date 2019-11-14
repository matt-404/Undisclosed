import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault()
        this.props.handleLogin(this.state)
      }}>
        <Link to="/">
          <img src="https://i.imgur.com/SGdVbso.png" alt="undisclosed logo" />
        </Link>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button id="submit">Login</button>
        <button id="register-link">
          <Link to='/register'>Register</Link>
        </button>
      </form>
    )
  }
}