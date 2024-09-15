import React from "react";
import "./stylesheets/home.css";
import Note from "../components/Note";
import Navbar from "../components/Navbar";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import BottomCard from "../components/BottomCard";

const Home = () => {
  return (
    <>
      <Note noteDetails="FREE SHIPPING for orders over $300. Order today" />
      <div className="Home">
        <Navbar />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <BottomCard />
      </div>
    </>
  );
};

export default Home;
