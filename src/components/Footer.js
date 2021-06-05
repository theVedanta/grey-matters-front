import React from 'react'
import './Footer.css'
import {FaGithub, FaFacebookSquare, FaBehance, FaInstagram} from "react-icons/fa"

function Footer() {

  const Iconstyle = { color: "white", fontSize: "1.75vw" }

  return (
      <div className="footer footer-container">
        <div className="footer footer-wrap">
          <h2 className="footer header">Powered by <span className="cw">Code Warriors</span></h2>   
          <div className="footer socials-wrap">
            <div className="footer para">
              <p>Mahika, Vedanta- Codimg</p>
              <p>Armaan-wtf</p>       
            </div>     
            <div className="footer socials">
              <a href="https://www.facebook.com/codewarriors/"><FaFacebookSquare style={Iconstyle}/></a>
              <a href="https://www.instagram.com/codewarriors42/?hl=en"><FaInstagram style={Iconstyle}/></a>
              <a href="https://github.com/codewarriors42"><FaGithub style={Iconstyle}/></a>
              <a href="https://www.behance.net/codewarriors"><FaBehance style={Iconstyle}/></a>
            </div>
        </div>  
        </div>
      </div>
  )
}

export default Footer
