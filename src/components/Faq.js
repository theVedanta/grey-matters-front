import React, { useEffect, useState } from "react";
import "./Faq.css"
import {FaInstagram, FaEnvelope, FaFacebookSquare} from 'react-icons/fa';
import { IconBase } from "react-icons";
import { withRouter } from "react-router-dom";

function Faq() {

    useEffect(() => {
        fetchFaqs();
      }, []);
    
      let [faqs, setFaqs] = useState([]);
    
      async function fetchFaqs() {
        const data = await fetch("https://grey-matters.herokuapp.com/faq");
        const faqs = await data.json();
        setFaqs(faqs.faqs);
    }

    let SocialStyles = {color: "white", fontSize: "1.5vw", margin: "0 0.3vw"}

    return (
        <div className="faq faq-container">
            <div className="faq faq-wrap">
                <h1 className="faq faq-header">Frequently Asked Questions</h1>
                <div className="units">
                    {faqs.map((faq) => {
                        return (
                        <div className="faq faq-div">
                            <div className="faq faq-question">
                                <div className="faq faq-iconWrap">
                                    <img src={process.env.PUBLIC_URL + 'images/plus.png'} className="faq faq-icon" />
                                </div>
                                <p className="faq faq-q">{faq.question}</p>
                            </div>
                            <div className="faq faq-answer hide">{faq.answer}</div>
                        </div>
                        )
                    })}
                </div>
                <p className="faq faq-text">Got more questions? <a  className="faq faq-email" href = "mailto: greymattersdps@gmail.com">Contact Us</a></p>
                <div className="faq connect"><p>Connect with us on</p>
                    <span className="faq socials">
                        <a href="https://www.instagram.com/grey._.matters/" target="_blank"><FaInstagram style={SocialStyles} /></a>
                        <a href="mailto: greymattersdps@gmail.com" target="_blank"><FaEnvelope style={SocialStyles} /></a>
                        <a href="https://www.facebook.com/GreyMattersDPSVK" target="_blank"><FaFacebookSquare style={SocialStyles} /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Faq
