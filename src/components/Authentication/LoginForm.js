import React, { Component } from 'react';

import './LoginForm.css';

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
        // <div>
        //   <form onSubmit={this.onSubmit}>
        //     <h1>Log in</h1>
        //     {
        //       errors.non_field_errors?
        //         <p>
        //           {errors.non_field_errors}
        //         </p>:""
        //     }
        //     <input
        //       type="text"
        //       name="username"
        //       placeholder="Username"
        //       onChange={this.handleInputChange} />
        //     <input
        //       name="password"
        //       type="password"
        //       placeholder="password"
        //       onChange={this.handleInputChange}/>
        //     <button type="submit">
        //       Log In
        //     </button>
        //   </form>
        // </div>

      <div>
        <div id="menu_bar">
          <div id="logo"></div>
          <div id="user_portal" className="white">Sign up</div>
        </div>
        <div id="signup_banner">
          <div className="title_content">
            <h1 className="white">Sign in</h1>
          </div>
        </div>

        <div className="sheet_content">
          <div className="row_flex">
            <form
              className="main_sheet"
              onSubmit={this.onSubmit} >
              {
                errors.non_field_errors ?
                  <p>
                    {errors.non_field_errors}
                  </p> : ""
              }

              <div className="textfield_area">
                <h4>Email</h4>
                <input
                  type="text"
                  name="username"
                  autoFocus
                  placeholder="name@example.com"
                  onChange={this.handleInputChange}
                  className="textfield" />
              </div>
              <div className="textfield_area">
                <h4>Password</h4>
                <input
                  type="password"
                  name="password"
                  className="textfield"
                  onChange={this.handleInputChange} />
              </div>

              {/* <div className="policy_check_area"><input className="sheet_checkbox" type="checkbox" name="policy_check" value="1" /> I agree to the <span className="text_link">User Agreement</span> and <span className="text_link">Privacy Policy</span></div> */}

              {/* <div className="sheet_button  disabled">Sign in</div> */}

              <button
                type="submit"
                className="sheet_button" >
                Sign in
              </button>
            </form>

            {/* <div className="side_sheet">
              <h4 className="section_title">Or connect with</h4>
              <div className="sheet_button"><div className="logo_coinbase"></div></div>
            </div> */}
          </div>
        </div>

      </div>
    )
  }
}
