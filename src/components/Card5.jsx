import React from "react";
import "./stylesheets/card5.css";
import Button from "./Button";

const Card5 = () => {
  return (
    <div className="card5">
      <div className="rightPart1">
        <img
          src={require("../resources/download.gif")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className="leftPart1">
        <div className="cardHeading">
          <span style={{ fontSize: "18px" }}>For print producers</span>
          <br />
          GelatoConnect
        </div>
        <div className="subHeading">
          Elevate efficiency, cut costs, and seamlessly automate with our
          all-in-one software solution for the print industry
        </div>
        <div className="buttons">
            <Button type="dark" content="Learn more" />
          </div>
      </div>
    </div>
  );
};

export default Card5;
