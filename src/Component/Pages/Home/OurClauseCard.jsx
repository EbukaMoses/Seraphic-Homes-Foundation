import React from "react";
import Button from "../../Common/Button";
// import OurClause from "./OurClause";
import { cause } from "../../../utilis/Data";

const OurClauseCard = () => {
  return (
    <>
      {cause.map((item) => (
        <div className="OurClauseCard" key={item.id}>
          <img src={item.img} alt="" className="OurClauseCard-img" />
          <div className="card-detail">
            <h6>{item.category}</h6>
            <h5>{item.title}</h5>

            <div className="donation">
              <span>Donation</span>
              <span>60%</span>
            </div>

            <div className="progress-bar">
              <div className="bar"></div>
            </div>

            <div className="donation">
              <span>Raised: {item.raised}</span>
              <span>Goal: {item.goal}</span>
            </div>

            <div className="OurClause-btn">
              <Button
                title="Donate"
                url="/"
                style="button bg-red"
                onClick=""
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurClauseCard;
