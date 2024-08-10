import React from "react";
import partner1 from "/images/partner1.png";
import partner2 from "/images/partner2.png";
import Button from "../../Common/Button";

const Partner = () => {
  return (
    <section className="bg-gray">
      <div className="container padding Hpartner">
        <div className="leftside">
          <h4>Be our partner</h4>
          <p>
            We are a non-profit charitable organization inspired by the Holy
            Spirit through God's servant EVANG. EBUKA ANOZIE OBI aimed at
            touching and impacting lives positively. Over the years, God has
            used his Servant EVANG. EBUKA ANOZIE OBI through Seraphic Homes
            Foundation to implement these divine agendas.
          </p>
          <Button title="Read More" url="/" style="button bg-blue" onClick="" />
        </div>
        <div className="rightside">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
