import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div id="abt" className="about about-container">
      <div className=" about about-wrap">
        <img src="/images/about.svg" alt="" className="about svg" />
        <div className="about about-text">
          <h1 className="about headerText">About Us</h1>
          <p className="about para">
            Grey Matters, the quiz club of DPS Vasant Kunj, was established in
            2006 and has since evolved into a society of prestige and
            accomplishment. Grey matters is one of Delhi's most ambitious quiz
            societies. We, the members of Grey matters, follow a particular way
            of thinking-the philosophy that quizzing ultimately comes down to
            the pursuit of thought, not just that of knowledge. It’s how one
            thinks that matters, not what one knows, and the quizzers at Grey
            Matters represent the same principle in everything they do - be it
            making quizzes or winning them.What you see here, today, is the
            culmination of years of effort to rejuvenate DPS Vasant Kunj's
            vibrant quizzing culture.
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
