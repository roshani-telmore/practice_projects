import React from "react";
import Bag from "./bag";
import Call from "./call";
import Email from "./email";
import Lock from "./lock";

function Desktop17() {
  return (
    <div className="account-wrapper">
      <div className="account">
        <div className="header">
          <div className="logo-title">Create Account</div>
          <div className="title">
            Student Pocket Money Management has become much
            <br /> more easier, just fill the info below to begin.
          </div>
        </div>

        <div className="content">
          <div className="student-name">
            <div className="name">
              <form>
                <div className="st-name">
                  <Bag />
                  <input
                    type="text"
                    id="nametext"
                    name="text"
                    placeholder="School Name"
                  />
                </div>
              </form>
            </div>
            <div className="email">
              <form>
                <div className="st-email">
                  <Email />
                  <input
                    type="text"
                    id="nametext"
                    name="text"
                    placeholder="School Email"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="student-password">
            <div className="password">
              <form>
                <div className="pass">
                  <Lock />
                  <input
                    type="text"
                    id="nametext"
                    name="text"
                    placeholder="Password"
                  />
                </div>
              </form>
            </div>
            <div className="phonenumber">
              <form>
                <div className="number">
                  <Call />
                  <input
                    type="text"
                    id="nametext"
                    name="text"
                    placeholder="School Phonenumber"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="confirm-pass">
            <form>
              <div className="conf-pass">
                <Lock />
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Confirm Password"
                />
              </div>
            </form>
          </div>
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
                  I agree to the Terms and Privacy Policy.
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="footer">
          <div className="register">
            <button>
              <p>
                <a href="#">REGISTER</a>
              </p>
            </button>
          </div>
          <div className="login">
            Already have an account?<a href="#"> Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop17;
