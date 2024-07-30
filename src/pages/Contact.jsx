import React from "react";
import { useState } from "react";
import "../style/contact.css";
import { useAuth } from "../store/auth";


const Contact = () => {

  const defaultContact = {
    username: "",
    email: "",
    message: "",
  }
  const [conatct, setContact] = useState(defaultContact);

  const [userData, setUserData] = useState(true);

  const {user} = useAuth();

  if (userData && user) {
    console.log("user data from contact: " + user.username);
    console.log("user data from contact: isAdmin " + user.isAdmin);
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const userEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...conatct,
      [name]: value,
    });
    // console.log(conatct);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(conatct);
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conatct),
      });

      if (res.ok) {
        console.log("Message Sent : ");
        console.log(res);
        setContact(defaultContact);
      } else {
        console.log("Message Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainContact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required
                autoComplete="off"
                value={conatct.username}
                onChange={userEvent}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required
                autoComplete="off"
                value={conatct.email}
                onChange={userEvent}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="message"
                required
                rows={3}
                autoComplete="off"
                value={conatct.message}
                onChange={userEvent}
              />
            </div>
            <div>
              <button type="submit" name="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
