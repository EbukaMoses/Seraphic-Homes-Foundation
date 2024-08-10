import React from "react";
import OurClauseCard from "./OurClauseCard";

const OurClause = () => {
  return (
    <section className="bg-blue">
      <div className="container padding OurClause">
        <h4>
          Take part in global cause by rising <br />
          your hand
        </h4>
        <div className="grid4">
          <OurClauseCard />
          
        </div>
      </div>
    </section>
  );
};

export default OurClause;
