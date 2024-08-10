import React from "react";
import "./Contact.css";
import InnerPage from "../../Common/InnerPage";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <>
      <section>
        <InnerPage />
      </section>
      <div className="container padding">
        <div className="contact-row">
          <div className="leftside">
            <div className="form">
              <h3>Hi, Talk to Us 💬</h3>
              <span>We’d love to hear from you!</span>

              <form>
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="e.g Godson Ifeanyi"
                    value=""
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="e.g info@seraphicoundation.com"
                    value=""
                  />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" placeholder="E.g 07038689968" value="" />
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea placeholder="Message" rows="10"></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="rightside">
            <h3>Message Us</h3>
            <div className="message">
              <span>
                <MdOutlineMailOutline className="icon" />
                <a href="">seraphichomesfoundation01@gmail.com</a>
              </span>
              <span>
                <MdOutlineMailOutline className="icon" />
                <a href="">info@seraphicoundation.com</a>
              </span>
              <span>
                <FiPhoneCall className="icon" />
                <FaWhatsapp className="icon" />
                <a href="">+2347044412156</a>
              </span>
              <span>
                <GrLocation className="icon2" />
                <p>
                  Onyebuchi Avenue Hosanna Estate, Ibro Way Ago, Okota Lagos
                  Nigeria
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0608654714555!2d3.3098300250698616!3d6.49082573529536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ecfb3eb1c25%3A0xe45e1a8d20370899!2sSeraphic%20Homes%20Foundation!5e0!3m2!1sen!2sng!4v1686935013661!5m2!1sen!2sng"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
