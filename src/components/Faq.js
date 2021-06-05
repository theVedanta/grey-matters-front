import React, { useEffect, useState } from "react";
import "./Faq.css"
import {AiOutlinePlusCircle} from 'react-icons/ai';
import { IconBase } from "react-icons";

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

    let icons = document.querySelector("div.faq-icon")
    // console.log(icon)

    // for (let icon of icons) {
    // icon.addEventListener("click", () => {
    //     icon.style.color = "red"
    //   });
    // }

    // icons.onclick = display = () => {

    // }

    function display(icon) {
        icon.onclick = () => {
            icon.classList.toggle("hide")
        }
    }

    // console.log(faqs)

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
                                <h1 className="faq faq-q">{faq.question}</h1>
                            </div>
                            <div className="faq faq-answer hide">{faq.answer}</div>
                        </div>
                        )
                    })}
                </div>
                <h1 className="faq faq-text">Got more questions? <a  className="faq faq-email" href = "mailto: team@greymattersdpsvk.org">Contact Us</a></h1>
            </div>
        </div>
    )
}

export default Faq
