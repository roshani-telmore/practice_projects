import React from "react";
import Profile from "./profil";
import Lock from "./lock";

function Admin() {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="header">
          <div className="title">Log in to Spms</div>
          <div className="para">
            Welcome back! login with your data that you
            <br /> entered during registration
          </div>
        </div>

        <div className="content">
          <div className="username">
            <form>
              <div className="user">
                <Profile />
                <input
                  type="text"
                  id="usertext"
                  name="text"
                  placeholder="Username"
                />
              </div>
            </form>
          </div>
          <div className="password">
            <form>
              <div className="pass">
                <Lock />
                <input
                  type="text"
                  id="Password"
                  name="Password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>

          <div className="check">
            <div className="check">
              <fieldset>
                <div className="inside-check">


                  <div className="spms-checkbox">
                    <input type="checkbox" id="termtext" name="terms" />
                    <label htmlFor="termtext">
                      <span></span>
                    </label>
                  </div>

                  
                  <label for="termsprivacy">
                    Remember me
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="forgot-pass">Forgot your Password?</div>
          </div>

          <div className="login">
            <button>
              <p>LOGIN</p>
            </button>
          </div>

          <div className="register">
            <p>
              Don't have account? <a href="#">Register </a>
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="terms">
            <a href="#">Terms & Privacy Policy </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
