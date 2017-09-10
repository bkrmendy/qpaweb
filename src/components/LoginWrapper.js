import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ReactSignupLoginComponent from 'react-signup-login-component';
import '../qpaweb.css'

class LoginPage extends Component {
    signupWasClickedCallback = (data) => {
      alert(data.username + ", your quest has not begun yet...");
    };

    loginWasClickedCallback = (data) => {
      this.props.login(data.username, data.password)
      this.props.history.push('/news');
    };

    recoverPasswordWasClickedCallback = (data) => {
      alert(data.username + ", your quest has not begun yet...");
    };

    render (){
      return (
      <div id="content" className="content">
      <ReactSignupLoginComponent
      title="46. Schönherz QPA regisztráció!"
      handleSignup={this.signupWasClickedCallback}
      handleLogin={this.loginWasClickedCallback}
      handleRecoverPassword={this.recoverPasswordWasClickedCallback}
      />
      </div>
    );
    }
  }

export default withRouter(LoginPage);
