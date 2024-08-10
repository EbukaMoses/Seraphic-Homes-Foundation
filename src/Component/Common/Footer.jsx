import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="">
        <div className="row grid5">
          <div className="footer-content">
            <img src="/images/logo2.png" alt="" />
            <p className="info">
              Home Who we are Be a Partner Branches Contact Us Donate now Quick
              Link Address Social Platforms Become a giver About us Onyebuchi
              Avenue Hosanna Estate, Ibro Way Ago, Okota Lagos Nigeria Donate
              now The Seraphic Homes Foundation aims to support non-profits,
              NGOs or other charitable, religious or educational organizations
              that provide life and vocational sustaining resources to vuln... 
              <Link to="/about" className="read-more">Read More</Link>
            </p>
          </div>
          <div className="footer-content">
            <h4>Quick Link</h4>
            <ul>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Our Program</Link>
              </li>
              <li>
                <Link to="/">Partner with us</Link>
              </li>
              <li>
                <Link to="/">Our Founder</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h4>Address</h4>
            <p>
              Onyebuchi Avenue Hosanna Estate, Ibro Way Ago, Okota Lagos Nigeria
            </p>
            <ul>
              <li>
                <Link to="/"> +2347044412156</Link>
              </li>
              <li>
                <Link to="/">seraphichomesfoundation01@gmail.com</Link>
              </li>
              <li>
                <Link to="/">info@seraphicoundation.com</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h4>Social Platforms</h4>
            <div className="social-icons">
              <Link to="/">
                <FaFacebookSquare className="fa-icons" />
              </Link>
              <Link to="/">
                <FaInstagramSquare className="fa-icons" />
              </Link>
              <Link to="/">
                <FaYoutubeSquare className="fa-icons" />
              </Link>
              <Link to="/">
                <FaSquareXTwitter className="fa-icons" />
              </Link>
            </div>
          </div>
          <div className="footer-content">
            <h4>Become a giver</h4>
            <Button title="Donate Now" url="/" style=" button bg-red" />
          </div>
        </div>

        <div className="copyright">
          <p>2024 © SeraphicHomesFoundation All Rights Reserved</p>
          <p>
            Designed By{" "}
            <a href="">
              <i>Ebuka Moses</i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
