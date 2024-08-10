import React from "react";
import OurBelieveCard from "./OurBelieveCard";

const OurBelieve = () => {
  return (
    <section className="bg-gray padding">
      <div className="container  ourbelieve">
        <h4>
          We Believe that We can Save <br /> More Lifes with you
        </h4>
        <div className="grid4 OurBelieveCard-container">
          <OurBelieveCard />
          <OurBelieveCard />
          <OurBelieveCard />
          <OurBelieveCard />
        </div>
      </div>
    </section>
  );
};

export default OurBelieve;
