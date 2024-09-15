import React from "react";
import "./stylesheets/bottomCard.css";
import Button from "./Button";
import { bottomList, rights } from "../utils/utils";
import DropDown from './DropDown.jsx'

const BottomCard = () => {
  return (
    <div className="bottomCard">
      <div className="frame1">
        <div className="bottommNav">
          <div className="leftNavPart">
            <img
              src={require("../resources/_logo.png")}
              alt=""
              style={{ width: "130px" }}
            />
          </div>
          <div className="rightNavPart">
            <div>
              <span>Find Gelato on:</span>
            </div>
            <div className="icons">
              <img src={require("../resources/instagram.png")} alt="" />
              <img src={require("../resources/facebook.png")} alt="" />
              <img src={require("../resources/tiktok.png")} alt="" />
              <img src={require("../resources/linkedin.png")} alt="" />
              <img src={require("../resources/youtube.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="bottomBody">
          <div className="left">
            <span className="leftDetails">
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </span>
            <Button type="light" content="Get started" />
            <span
              style={{ fontSize: "16px", color: "white", marginTop: "48px" }}
            >
              Get the app
            </span>
            <div className="appImageHolder">
              <img src={require("../resources/badge-1.png")} alt="" />
              <img src={require("../resources/badge.png")} alt="" />
            </div>
          </div>
          {bottomList.map((list) => {
            return (
              <>
                <div className="listBlock">
                  <div className="listHead">{list.head}</div>
                  <div className="list">
                    {list.list.map((element) => {
                      return <div className="element">{element}</div>;
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottomNav2">
          <div className="rights">
            {rights.map((right)=>{return(<>
              <span>{right.right}</span>
              <span>|</span>
              </>
            )})}
          </div>
          <div className="languageSelector">
            <DropDown heading="Language"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
