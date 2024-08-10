import React from "react";
import "./Home.css";
import HeroImg from "/images/Hero.png";
import CircleImg from "/images/circle.png";
import LineImg from "/images/line.png";
import Button from "../../Common/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <img src={HeroImg} alt="" className="HeroImg" />
      <div className="shape"></div>
      <div className="Hero-details">
        <h1>Donate For The Poor Children In Their Need.</h1>
        <p>
          Save the children by helps girls and boys living in poverty in
          Nigeria. Donate today to provide healthcare, education and nutrition
          to a child in their need.
        </p>
        <Button title="Donate Now" url="/donate" style="button bg-red" onClick="" />
      </div>
      <img src={LineImg} alt="" className="LineImg" />
      <img src={CircleImg} alt="" className="CircleImg" />
    </section>
  );
};

export default Hero;
