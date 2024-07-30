// create a error 404 page with style

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
    };
  return (
    <div className="error" style={style}>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
// Path: client-side/src/pages/Home.jsx

