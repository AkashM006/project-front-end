import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import server from "../../constants";

const Login = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/user/");
    }
  }, [user, navigate]);

  const loginHandler = (event) => {
    event.preventDefault();
    const data = {
      email: lEmail,
      password: lPassword,
    };
    axios
      .post(`${server}/login`, { data })
      .then((res) => {
        const userObject = {
          token: res.data.token,
          email: res.data.user.email,
          type: res.data.user.type,
          name: res.data.user.name,
        };
        dispatch(login(userObject));
      })
      .catch((err) => console.log(err));
  };

  const signupHandler = (event) => {
    event.preventDefault();
    // send post request to /register route
    const data = {
      email: sEmail,
      password: sPassword,
      name: sName,
      type: 1,
    };
    axios
      .post(`${server}/register`, { data })
      .then((res) => {
        const userObject = {
          token: res.data.token,
          email: res.data.user.email,
          type: res.data.user.type,
          name: res.data.user.name,
        };
        dispatch(login(userObject));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [lEmail, setLemail] = useState("");
  const [lPassword, setLpassword] = useState("");

  const [sName, setSname] = useState("");
  const [sEmail, setSemail] = useState("");
  const [sPassword, setSPassword] = useState("");

  return (
    <div className="body1">
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Every new friend is a new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              className="backImg"
              src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Complete miles of journey with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={loginHandler}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      value={lEmail}
                      onChange={(event) => setLemail(event.target.value)}
                      placeholder="Enter your email"
                      autoFocus
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      value={lPassword}
                      onChange={(event) => setLpassword(event.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="/">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label htmlFor="flip">Signup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={signupHandler}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      value={sName}
                      onChange={(event) => setSname(event.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={sEmail}
                      onChange={(event) => setSemail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={sPassword}
                      onChange={(event) => setSPassword(event.target.value)}
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
