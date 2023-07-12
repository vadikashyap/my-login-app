import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Input from "../components/Input";
import Swal from "sweetalert2";

const Register = ({ setPage, userList, setUserList }) => {
  const [regInfo, setRegInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegInfo({ ...regInfo, [name]: value });
  };

  const handleClick = () => {
    if (!regInfo.password || !regInfo.email || !regInfo.name) {
      Swal.fire("Error!", "All input required", "error");
      return;
    }
    Swal.fire("Good job!", "Sing up success", "success");
    setUserList([
      ...userList,
      { name: regInfo.name, email: regInfo.email, password: regInfo.password },
    ]);
    setRegInfo({
      email: "",
      password: "",
      name: "",
    });
  };

  return (
    <Wrapper
      title="Create an account"
      bottomSection={
        <p>
          Already have an account?{" "}
          <span className="thembo" onClick={() => setPage("login")}>
            Log in
          </span>
        </p>
      }
    >
      <div className="form-group form-box clearfix">
        <Input
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter Name"
          aria-label="Enter Name"
          value={regInfo.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group form-box clearfix">
        <Input
          name="email"
          type="email"
          className="form-control"
          placeholder="Email Address"
          aria-label="Email Address"
          value={regInfo.email}
          onChange={handleChange}
        />
        <i className="flaticon-mail-2"></i>
      </div>
      <div className="form-group form-box clearfix">
        <Input
          name="password"
          type="password"
          className="form-control"
          autoComplete="off"
          placeholder="Password"
          aria-label="Password"
          value={regInfo.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-theme"
          onClick={handleClick}
        >
          <span>Sign up</span>
        </button>
      </div>
      <div className="extra-login form-group clearfix">
        <span>Or Login With</span>
      </div>
    </Wrapper>
  );
};

export default Register;
