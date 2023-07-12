import React, { useEffect, useState } from "react";
import "./pagestyle.scss";
import Input from "../components/Input";
import Logo from "../img/logo-1.png";
import Swal from "sweetalert2";
import Wrapper from "../components/Wrapper";

const Login = ({ setPage, userList }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleClick = () => {
    if (!loginInfo.password || !loginInfo.email) {
      Swal.fire("Error!", "All input required", "error");
      return;
    }
    const currentObj = userList.find((data) => data.email === loginInfo.email);
    if (currentObj) {
      if (currentObj.password === loginInfo.password) {
        Swal.fire("Good job!", "You login success!", "success");
        return;
      }
      Swal.fire("Error!", "Password not match", "error");
    } else {
      Swal.fire("Error!", "User not found", "error");
    }
  };

  return (
    <Wrapper
      title="Sign Into Your Account"
      bottomSection={
        <p>
          Don't have an account?{" "}
          <span className="thembo" onClick={() => setPage("register")}>
            Register here
          </span>
        </p>
      }
    >
      <div className="form-group form-box clearfix">
        <Input
          name="email"
          type="email"
          className="form-control"
          placeholder="Email Address"
          aria-label="Email Address"
          value={loginInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group form-box clearfix">
        <Input
          name="password"
          type="password"
          className="form-control"
          autoComplete="off"
          placeholder="Password"
          aria-label="Password"
          value={loginInfo.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-theme"
          onClick={handleClick}
        >
          <span>Login</span>
        </button>
      </div>
      <div className="extra-login form-group clearfix">
        <span>Or Login With</span>
      </div>
    </Wrapper>
  );
};

export default Login;
