import React from "react";
import "./stylesheets/card3.css";
import { card3Details } from "../utils/utils";

const Card3 = () => {
  return (
    <div className="card3">
      <div className="cardHeading">Why choose Gelato</div>
      <div className="card3body">
        <div className="rightPart1">
          <img
            src={require("../resources/card2image.png")}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="leftPart1">
            {card3Details.map((details) =>{return(
                <div className="detail">
                    <div className="subHeading">{details.heading}</div>
                    <div className="content">{details.subHeading}</div>
                </div>
            )
            })}
        </div>
      </div>
    </div>
  );
};

export default Card3;
