// Login.jsx

import React from "react";
import { useState } from "react";
import "../style/login.css"; // Import the CSS file
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const userEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); 

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await res.json();
      if (res.ok) {
        storeTokenInLS(res_data.token);
        console.log("tokens are : " , res_data.token);

        console.log("Login Successful : ");
        // console.log(res);
        setUser({
          email: "",
          password: "",
        });
        toast.success("Login Successful");
        navigate("/");
      } else {
        // alert(res_data.message);
        toast.error(res_data.message);
        console.log("Login Failed : ", res_data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginMain">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={userEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={userEvent}
            />
          </div>
          <div className="form-group">
            <button type="submit" name="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
