// About.jsx

import React from "react";
import "../style/about.css";
import { useState } from "react";
import { useAuth } from "../store/auth";
const About = () => {
  const { user } = useAuth();

  return (
    <div className="about-container">
      <h1 className="heading">About Us</h1>
      <p>Welcome, {user ? user.username : "XXXXXXXX"}</p>
      <p>Your Mail is , {user ? user.email : "XXXXXXXX@xxxx.xxx"}</p>
      <p className="paragraph">
        Discover our story and what drives us to create amazing experiences for
        you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        eget felis non nisi scelerisque euismod ut et sapien.
      </p>

      <div className="image-container">
        <img src="https://placekitten.com/800/400" alt="Team" />
      </div>
    </div>
  );
};

export default About;
