import React from "react";
import AboutImg from "/images/AboutImg.png";
import Button from "../../Common/Button";

const AboutHome = () => {
  return (
    <div className="container padding AboutHome">
      <div className="leftside">
        <img src={AboutImg} alt="" />
      </div>
      <div className="rightside">
        <h4>ABOUT SERAPHIC FOUNDATION</h4>
        <h2>We Make This World Better For Poor the People</h2>
        <p>
          We are a non-profit charitable organization inspired by the Holy
          Spirit through God's servant EVANG. EBUKA ANOZIE OBI aimed at touching
          and impacting lives positively. Over the years, God has used his
          Servant EVANG. EBUKA ANOZIE OBI through Seraphic Homes Foundation to
          implement these divine agendas.
        </p>
        <Button title="Read More" url="/" style="button bg-blue" onClick="" />
      </div>
    </div>
  );
};

export default AboutHome;
