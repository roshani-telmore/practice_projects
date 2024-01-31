import DarkModeIcon from "assets/images/icons/darkmode-icon";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="sign-in-page">
      <div className="sign-in">
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="username">
            <div className="user">
              <input
                type="email"
                id="usertext"
                name="email"
                placeholder="Enter your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className="password">
            <div className="pass">
              <input
                type="text"
                id="Password"
                name="password"
                placeholder="Enter your Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
          </div>

          <div className="remember">
            <div className="check">
              <fieldset>
                <div className="inside-check">
                  <div className="spms-checkbox">
                    <input type="checkbox" id="termtext" name="terms" />
                    <label for="termtext">
                      <span></span>
                    </label>
                  </div>
                  <label for="termsprivacy">Remember me</label>
                </div>
              </fieldset>
            </div>

            <div className="forgot-pass">Forgot Password?</div>
          </div>

          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>

      <div className="register-btn">
        <button className="register"> Register</button>
      </div>

      <div className="mode">
        <DarkModeIcon className="dark-mode" />
        <img src="/images/sign-in-backgrd.png" />
      </div>
    </div>
  );
}

export default LoginPage;
