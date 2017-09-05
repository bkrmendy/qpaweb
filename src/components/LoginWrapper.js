import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import '../qpaweb.css'

const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      alert("authenticated")
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
    };
    return (
      <div id="content" className="content">
            <ReactSignupLoginComponent
                title="X. Schönherz QPA regisztráció!"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};

export default LoginPage;
