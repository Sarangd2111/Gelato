import React from "react";
import "./stylesheets/card4.css";
import Button from "./Button";

const Card4 = () => {
  return (
    <div className="card4">
      <div className="frame">
        <div className="leftPart1">
          <div className="cardHeading">
          <span style={{ fontSize: "18px"}}>
            For print on demand sellers
          </span><br />
            Accelerate business growth with innovative design tools and apps
          </div>
          <div className="subHeading">
            See how our cutting-edge solutions can help you reach new customers
            and maximize your profits.
          </div>
          <div className="buttons">
            <Button type="dark" content="Get started" />
          </div>
        </div>
        <div className="rightPart1">
          <img
            src={require("../resources/card3.gif")}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card4;
