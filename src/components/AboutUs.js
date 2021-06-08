import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about about-container">
      <div className=" about about-wrap">
        <img src="/images/about.svg" alt="" className="about svg" />
        <div className="about about-text">
          <h1 className="about headerText">About Us</h1>
          <p className="about para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="about image-wrap">
          <img
            className="about about-image"
            src={process.env.PUBLIC_URL + "images/sample.jpg"}
          />
          <img
            className="about about-image"
            src={process.env.PUBLIC_URL + "images/sample.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
