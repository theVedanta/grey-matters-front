import React from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import Faq from "./Faq";

function Home() {
  return (
    <>
      <div className="home top-container">
        <img src="/images/Group_51.svg" alt="" className="home svg" />
        <div className="home top-text-wrap">
          <div className="home top-text">
            <h1 className="home headerTop-1">Grey Matters</h1>
            <h2 className="home headerTop-2">Monochrome Minds,</h2>
            <h3 className="home headerTop-3">We Quiz.</h3>
            <a className="home learnMore">Learn More</a>
          </div>
        </div>
      </div>
      <AboutUs />
      <Faq />
    </>
  );
}

export default Home;
