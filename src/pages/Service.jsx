


import React from "react";
import { useAuth } from "../store/auth";
import img from "../image/img1.png";
import { useState } from "react";
import "../style/Service.css";

const Service = () => {
  const { service } = useAuth();

  const [count, setCount] = useState(0);

  const data = service.response;

  return (
    <div className="service-container">
      <h1 className="heading">Our Services</h1>
      <div className="content">
        {data &&
          data.map((item, index) => {
            const {service_name, description, price, provider} = item;
            return (
              <div key={index} className="card">
                <img className="service-img" src={img} alt="Service 1" />
                
                <h2>{service_name}</h2>
                <p>{description}</p>
                <h3>{price}</h3>
                <p>{provider}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Service;
