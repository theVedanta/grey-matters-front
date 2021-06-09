import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  const Iconstyle = { color: "white" };
  const mediaIcons = { color: "white", fontSize: "5vw" };

  return (
    <div className="footer footer-container">
      <div className="footer footer-wrap">
        <div className="footer-text">
          <p className="footer header">
            Powered by <span className="cw">Code Warriors</span>
          </p>

          <div className="footer media socials-wrap">
            <div className="footer media socials">
              <a
                href="https://www.instagram.com/grey._.matters/"
                target="_blank"
                style={Iconstyle}
              >
                <FaInstagram />
              </a>
              <a
                href="mailto: greymattersdps@gmail.com"
                target="_blank"
                style={Iconstyle}
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.facebook.com/GreyMattersDPSVK"
                target="_blank"
                style={Iconstyle}
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>

          <p className="footer para">
            Development: Mahika Sehrawat, Vedanta Somnathe
          </p>
          <p className="footer para">Design: Armaan Agarwal</p>
        </div>
        <div className="footer big socials-wrap">
          <div className="footer big socials">
            <a
              href="https://www.instagram.com/grey._.matters/"
              target="_blank"
              style={Iconstyle}
            >
              <FaInstagram />
            </a>
            <a
              href="mailto: greymattersdps@gmail.com"
              target="_blank"
              style={Iconstyle}
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/GreyMattersDPSVK"
              target="_blank"
              style={Iconstyle}
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
