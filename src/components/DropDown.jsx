import React, { useState } from "react";
import "./stylesheets/dropdown.css";

const DropDown = ({ heading, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="DropDown" onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
        <span>{heading}</span>
        <img
          src={require("../resources/dropdown.png")}
          alt=""
          className="dropDownIcon"
        />
      </div>
      {isOpen && options && (
        <ul className="dropdownMenu">
          {options.map((option) => {
            return <li>{option}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default DropDown;
