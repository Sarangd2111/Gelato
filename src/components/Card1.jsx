import React from "react";
import Button from "./Button";
import "./stylesheets/card1.css";
import star from '../resources/star.png'

const Card1 = () => {
    function Rating(rate){
        var i;
        var startList = []; 
        for(i=1;i<=Math.round(rate);i++){
            startList.push(<img src={star} alt="star" />)
        }
        startList.push(<span>{rate + ' / 5'}</span>)
        return startList
    }

  return (
    <div className="card1">
      <div className="leftPart1">
        <div className="cardHeading">
          Print on demand for your ecommerce business
        </div>
        <div className="subHeading">
          Sign up for free and only pay for what you sell
        </div>
        <div className="content">
          Turn your passion into profit with the world's largest{" "}
          <u>print on demand</u> network.
        </div>
        <div className="buttons">
          <Button type="dark" content="Get Started for free" />
          <Button type="light bordered" content="See our products" />
        </div>
        <div className="rating">
          <img
            src={require("../resources/shopify_monotone_black.png")}
            alt=""
            style={{ width: "150px" }}
          />
          <div className="stars">
            {Rating(4.8)}
          </div>
          <div className="reviews">
            <span>{'based on 887 reviews'}</span>
          </div>
        </div>
      </div>
      <div className="rightPart1">
        <img
          src={require("../resources/card1image.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Card1;
