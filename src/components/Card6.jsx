import React from "react";
import Button from "./Button";

const Card6 = () => {
  return (
    <div className="card4">
      <div className="frame">
        <div className="leftPart1">
          <div className="cardHeading">
            Meet GelatoConnect at Printing United
          </div>
          <div className="content">
            Meet us at Printing United from September 10-12 in Las Vegas. Book
            your meeting slot to discover the innovative ways GelatoConnect is
            transforming the landscape and driving success for businesses like
            yours.
          </div>
          <div className="buttons">
            <Button type="dark" content="Book a meeting" />
          </div>
        </div>
        <div className="rightPart1">
          <img
            src={require("../resources/card5image.png")}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card6;
