import React, { useState } from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ImMenu } from "react-icons/im";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    // const nav = document.querySelector(".nav");
    // nav.classList.add("nav-visible");

    setNav(true);
    // alert("open");
  };
  const closeNav = () => {
    // const nav = document.querySelector(".nav");
    // nav.classList.remove("nav-visible");
    setNav(false);
    // alert("Close");
  };

  return (
    <section className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>
      <ImMenu className="menu-open" onClick={openNav} />
      <nav className={`nav ${nav ? "nav-visible" : "nav-invisible"}`}>
        <ul className="Nav-links">
          <MdCancel className="menu-close" onClick={closeNav} />
          <li>
            <Link to="/" className="link" onClick={closeNav}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="link" onClick={closeNav}>
              About
            </Link>
          </li>

          <li>
            <Link to="/partner" className="link" onClick={closeNav}>
              Partnership
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link" onClick={closeNav}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/founder" className="link" onClick={closeNav}>
              Founder
            </Link>
          </li>

          <li>
            <Link to="/contact" className="link" onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
        <Button
          title="Donate"
          url="/donate"
          style="button bg-red"
          onClick={closeNav}
        />
      </nav>
    </section>
  );
};

export default Header;
