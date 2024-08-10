import React from "react";
import "./About.css";
import AboutImg from "/images/AboutImg.png";
import MissionImg from "/images/vision.png";
import Scholarship from "/images/scholarship.jpg";
import InnerPage from "../../Common/InnerPage";
import Button from "../../Common/Button";
import { program } from "./AboutData";

const About = () => {
  return (
    <>
      <section>
        <InnerPage />
      </section>
      <div className="container padding">
        <div className="About-row">
          <div className="leftside">
            <img src={AboutImg} alt="" />
          </div>
          <div className="rightside">
            <h4>SERAPHIC HOMES FOUNDATION</h4>
            <p>
              The Seraphic Homes Foundation aims to support non-profits, NGOs or
              other charitable, religious or educational organizations that
              provide life and vocational sustaining resources to vulnerable
              communities in Nigeria and to people of Nigerians descent that
              live around the world.The Seraphic Homes Foundation aims to
              support non-profits, NGOs or other charitable, religious or
              educational organizations that provide life and vocational
              sustaining resources to vulnerable communities in Nigeria and to
              people of Nigerians descent that live around the world. The
              Seraphic Homes Foundation aims to support non-profits, NGOs or
              other charitable, religious or educational organizations that
              provide life and vocational sustaining resources to vulnerable
              communities in Nigeria and to people of Nigerians descent that
              live around the world. a non-profit charitable organization
              inspired by the Holy Spirit through God's servant EVANG. EBUKA
              ANOZIE OBI aimed at touching and impacting lives positively. Over
              the years, God has used his Servant Evang Ebuka obi through
              Seraphic Homes Foundation to implement these divine agendas. SHF
              provides Books, Cloths, Diapers and Food for infants and toddlers
              from less privileged communities. SHF provides vocational training
              to assist with job placement for lower income Nigeria who have
              left a life of negative vices by assisting them to get back to
              their feet. SHFprovides funding for non-perishable foods to
              widows, orphanages and for other less privileged communities SHF
              runs a whole range of program and support disadvantaged and
              impoverished families through providing scholarship from
              kindergarten, primary, secondary and university level. SHF
              provides assistance to patients who can't afford life sustaining
              treatment and hospitals
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray">
        <div className="container padding">
          <div className="Mission-row">
            <div className="leftside">
              <h3>Our Mission</h3>
              <p>
                The Seraphic Homes Foundation aims to support non-profits, NGOs
                or other charitable, religious or educational organizations that
                provide life and vocational sustaining resources to vulnerable
                communities in Nigeria and to people of Nigerians descent that
                live around the world.
              </p>

              <h3>Our Vision</h3>
              <p>
                The Seraphic Homes Foundation aims to support non-profits, NGOs
                or other charitable, religious or educational organizations that
                provide life and vocational sustaining resources to vulnerable
                communities in Nigeria and to people of Nigerians descent that
                live around the world.
              </p>

              <h3>Our Value</h3>
              <p>
                The Seraphic Homes Foundation aims to support non-profits, NGOs
                or other charitable, religious or educational organizations that
                provide life and vocational sustaining resources to vulnerable
                communities in Nigeria and to people of Nigerians descent that
                live around the world.
              </p>
            </div>
            <div className="rightside">
              <img src={MissionImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-">
        <div className="our-program container padding">
          <h4>Our Clause</h4>
          <h3>We Make This World Better For Poor Children</h3>

          <div className="grid3">
            {program.map((item) => (
              <div className="program-card">
                <img src={item.img} alt="Seraphic Foundation" />

                <div className="program-card-content">
                  <h4>{item.title}</h4>
                  <p>⦿→{item.description}</p>

                  <div className="btn">
                    <Button
                      title="Donate Now"
                      style="bg-blue button"
                      url="/donate"
                      onClick=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
