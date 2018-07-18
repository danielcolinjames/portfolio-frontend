import React, { Component } from 'react'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }
  render() {
    const errors = this.props.errors || {}
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Log in</h1>
          {
            errors.non_field_errors?
              <p>
                {errors.non_field_errors}
              </p>:""
          }
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleInputChange} />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={this.handleInputChange}/>
          <button type="submit">
            Log In
          </button>
        </form>
      </div>
    )
  }
}
