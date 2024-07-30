// _________________________________________________
// -------------------------------------------------
// REGISTER PAGES --------------------------------
// -------------------------------------------------
// _________________________________________________

// Register.jsx

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css"; // Import the CSS file
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultRegister = {
  username: "",
  email: "",
  phone: "",
  password: "",
};

const Register = () => {
  const [user, setUser] = useState(defaultRegister);

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  
  
  const userEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const res = await fetch("https://backend-mern-cun5.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await res.json();
      console.log("response = ", res_data);

      if (res.ok) {
        
        console.log("Registration Successful : ");
        
        // store the registration token in local storage
        
        storeTokenInLS(res_data.token);

        setUser(defaultRegister);
        toast.success("Registration Successful");
        navigate("/");
      } else {
        console.log("Registration Failed : ", res_data);
        // console.log("Registration Failed : ", res_data.message);
        toast.error(res_data.extraDetails ? res_data.extraDetails.message : res_data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="registerMain">
        <div className="register-container">
          <h1>Register</h1>
          <div className="register-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">UserName</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={userEvent}
                />
              </div>
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
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
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
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
