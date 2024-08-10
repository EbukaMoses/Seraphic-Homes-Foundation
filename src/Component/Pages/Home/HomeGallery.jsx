import React from "react";
import gallery from "/images/gallery.png";
import gallery2 from "/images/gallery2.png";
import gallery3 from "/images/gallery3.png";
// import homeless from "/images/homeless.png";
const HomeGallery = () => {
  return (
    <div className="container padding HomeGallery">
      <h4>Photo gallery</h4>
      <div className="content">
        <div className="leftside">
          <img src={gallery} alt="" />
        </div>
        <div className="rightside">
          <div className="top">
            <img src={gallery2} alt="" />
          </div>
          <div className="bottom">
            <img src={gallery3} alt="" />
            <img src={gallery3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
