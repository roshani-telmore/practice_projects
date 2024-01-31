import DarkModeIcon from "assets/images/icons/darkmode-icon";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

function SignIn() {
  // const formik = useFormik({});
  // console.log(formik);
  const [myobj, setMyobj] = useState([]);
  const [user, setUser] = useState({ email: "", password: "" });
  let done = "";
  const handlesubmit = (e) => {
    e.preventDefault();
    //  console.log("hello")
    // console.log("ss", myobj.data.length);

    for (let i = 0; i < myobj.data.length; i++) {
      console.log("data", myobj.data[i]);
      if (
        user.email === myobj.data[i].name &&
        user.password === myobj.data[i].color
      ) {
        alert("Login Sucessfully");
      }
    }
  };
  const handlechange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const rosh = async () => {
      const response = await fetch("https://reqres.in/api/login");
      const data = await response.json();
      setMyobj(data);
    };
    rosh();
  }, []);

  return (
    <div className="sign-in-page">
      <div className="sign-in">
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>

        <form onSubmit={handlesubmit}>
          <div className="username">
            <div className="user">
              <input
                type="text"
                id="usertext"
                name="email"
                placeholder="Username"
                value={user.email}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="password">
            <div className="pass">
              <input
                type="text"
                id="Password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handlechange}
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
          {/* <div className="login-btn"> */}

          <button className="login-btn" type="submit">
            LOGIN
          </button>

          {/* </div> */}
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

export default SignIn;
