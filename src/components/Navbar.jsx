import React, { useEffect, useState } from "react";
import "./stylesheets/nav.css";
import Button from "../components/Button";
import signin from "../resources/signin.png";
import cart from "../resources/cart.png";
import world from "../resources/world.png";
import contact from "../resources/contact.png";
import dropdown from "../resources/dropdown.png";
import Ruler from "./Ruler";
import DropDown from "./DropDown";
import { dropDownElements } from "../utils/utils";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showUpperMenu, setShowUpperMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [sticky, setSticky] = useState("");

  const handleShowNavbar = () => {
    setShowMenu(!showMenu);
    setShowUpperMenu(!showUpperMenu);
    setOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const nav = document.querySelector(".Navbar");
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 38
      ? nav.classList.add("isSticky")
      : nav.classList.remove("isSticky"); 
      setSticky(stickyClass);
  };

  const classes = `Navbar ${sticky}`;

  return (
    <div className={classes}>
      <div className="upperNav">
        <div className="hamIconLogo">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <img
            src={require("../resources/gelato_logo_black.png")}
            alt="gelato_logo"
            className="navLogo"
          />
        </div>
        <div className="rightPanel">
          <div className="upperNavElements">
            <Button type="light" content="Contact us" icon={contact} />
            <Button
              type="light"
              content="IN/INR"
              icon={world}
              dropdown={dropdown}
            />
            <Button type="light" content="Cart" icon={cart} />
            <Button type="light" content="Sign in" icon={signin} />
          </div>
          <Button type="dark" content="Sign up for free" />
        </div>
      </div>
      <Ruler />
      <div className="lowerNav">
        <div className="sideUpperNav">
          <div className="sideUpperNavElements">
            <Button type="light" content="Contact us" icon={contact} />
            <Button
              type="light"
              content="IN/INR"
              icon={world}
              dropdown={dropdown}
            />
            <Button type="light" content="Cart" icon={cart} />
            <Button type="light" content="Sign in" icon={signin} />
          </div>
        </div>
        <div className={`lowerNavElements  ${showMenu && "active"}`}>
          {dropDownElements.map((dropdown) => {
            return (
              <DropDown heading={dropdown.heading} options={dropdown.options} />
            );
          })}
        </div>
      </div>
      <Ruler />
    </div>
  );
};

export default Navbar;
