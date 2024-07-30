
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [service, setService] = useState("");
  const [adminUser, setAdminUser] = useState("");
  const [adminContact, setAdminContact] = useState("");

  // store token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };



  let isLoggedin = !!token;
  console.log("isLoggedin :>> ", isLoggedin);

  // logout functionality
  const LogoutUser = () => {
    localStorage.removeItem("token");
    // Redirect user to login page or refresh the page
    window.location.href = '/login'; // Replace '/login' with your actual login page URL
  };





  const userAuthentication = async () => {
    try {
      const response = await fetch("https://backend-mern-cun5.onrender.com/auth/user", 
      {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("data :>> ", data);
        setUser(data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };






  // fatching services from the server 
  const serviceData = async () => {
    try {
     const response = await fetch("https://backend-mern-cun5.onrender.com/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(" Service data :>> ", data);
        setService(data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };







  // fatching admin data from server (user)
  const adminUserData = async () => {
    try {
      const response = await fetch("https://backend-mern-cun5.onrender.com/admin/users", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(" Admin data :>> ", data);
        setAdminUser(data);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  // fatching admin data from server (contact)
  const adminContactData = async () => {
    try {
      const response = await fetch("https://backend-mern-cun5.onrender.com/admin/contacts", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(" Admin data :>> ", data);
        setAdminContact(data);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  // jwt authentication: to get the currently logged in user data
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
    serviceData();
    adminUserData();
    adminContactData();
  }, [token]);

  // service provider



  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedin, user, service, adminUser, adminContact }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};