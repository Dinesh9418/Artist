import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="main">
      <div class="container" id="container">
        <div class="form-container log-in-container">
          <form className="logIn_form" action="#">
            <h1 className="login_h1">Login</h1>
            <div class="social-container">
              <a href="#" class="social logIn_a">
                <i class="fa fa-facebook fa-2x"></i>
              </a>
              <a href="#" class="social logIn_a">
                <i class="fab fa fa-twitter fa-2x"></i>
              </a>
            </div>
            <span className="logIn_span">or use your account</span>
            <input className="logIn_input" type="email" placeholder="Email" />
            <input
              className="logIn_input"
              type="password"
              placeholder="Password"
            />
            <a href="#" className="logIn_a">
              Forgot your password?
            </a>
            <button className="logIn_button">Log In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>HTML CSS Login Form</h1>
              <p className="logIn_p">
                This login form is created using pure HTML and CSS. For social
                icons, FontAwesome is used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
