import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaFacebookSquare,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

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
              <a href="https://www.facebook.com/codewarriors/">
                <FaFacebookSquare style={Iconstyle} />
              </a>
              <a href="https://www.instagram.com/codewarriors42/?hl=en">
                <FaInstagram style={Iconstyle} />
              </a>
              <a href="https://github.com/codewarriors42">
                <FaGithub style={Iconstyle} />
              </a>
              <a href="https://www.behance.net/codewarriors">
                <FaBehance style={Iconstyle} />
              </a>
            </div>
          </div>

          <p className="footer para">Mahika, Vedanta- Coding</p>
          <p className="footer para">Armaan- Designing</p>
        </div>
        <div className="footer big socials-wrap">
          <div className="footer big socials">
            <a href="https://www.facebook.com/codewarriors/">
              <FaFacebookSquare style={Iconstyle} />
            </a>
            <a href="https://www.instagram.com/codewarriors42/?hl=en">
              <FaInstagram style={Iconstyle} />
            </a>
            <a href="https://github.com/codewarriors42">
              <FaGithub style={Iconstyle} />
            </a>
            <a href="https://www.behance.net/codewarriors">
              <FaBehance className="reactIcons" style={Iconstyle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
