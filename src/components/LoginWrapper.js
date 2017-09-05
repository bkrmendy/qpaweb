import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ReactSignupLoginComponent from 'react-signup-login-component';
import '../qpaweb.css'

class LoginPage extends Component {
    constructor(props){
      super(props);
    }
    signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    loginWasClickedCallback = (data) => {
      this.props.login()
      this.props.history.push('/news');
      //window.location.href = window.location.protocol + window.location.host+ "/news";
      console.log(this);
    };
    recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
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
