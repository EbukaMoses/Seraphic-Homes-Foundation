import React from "react";
import { Link, useLocation } from "react-router-dom";
import AboutImg from "/images/banner2.jpg";

const InnerPage = () => {
  const location = useLocation();

  return (
    <section className="innerpage">
      <div className="overlay"></div>
      <img src={AboutImg} alt="" />
      <div className="content">
        <div className="panel">
          <Link to="/">Home</Link> /{" "}
          <span>{location.pathname.split("/")[1]}</span>
        </div>
        <h1 data-aos="fade-right">{location.pathname.split("/")[1]}</h1>
      </div>
    </section>
  );
};

export default InnerPage;
