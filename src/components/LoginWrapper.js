import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ReactSignupLoginComponent from 'react-signup-login-component';
import '../qpaweb.css'

const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      props.login()
      window.location.href = window.location.protocol + window.location.host+ "/news";
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
    };
    return (
      <div id="content" className="content">
            <ReactSignupLoginComponent
                title="46. Schönherz QPA regisztráció!"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};

export default withRouter(LoginPage);
