import React from "react";
import "../style/dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="heading">Dashboard</h1>

      <p className="paragraph">
        Welcome to the dashboard! Here you can manage your account, view your
        orders, and more.
      </p>
      {/* // image-container */}
      <div className="image-container">
        <img src="https://placekitten.com/800/400" alt="Team" />
      </div>
    </div>
  );
};

export default Dashboard;
