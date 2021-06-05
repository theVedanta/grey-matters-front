import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="about about-container">
            {/* <svg className="about svg" width="1920" height="832" viewBox="0 0 1920 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M665 423H1179.44" stroke="white" stroke-opacity="0.1" stroke-width="15"/>
                <path d="M447.557 574V574C447.557 594.979 447.557 605.468 443.894 613.655C439.677 623.079 432.136 630.62 422.712 634.837C414.526 638.5 404.036 638.5 383.057 638.5H182.933C164.626 638.5 155.472 638.5 147.842 639.905C113.158 646.289 86.0198 673.428 79.6352 708.111C78.2306 715.742 78.2306 724.895 78.2306 743.202V743.202C78.2306 757.417 78.2306 764.524 77.1399 770.449C72.1824 797.38 51.1101 818.452 24.1793 823.409C18.2547 824.5 11.1473 824.5 -3.06745 824.5H-129" stroke="white" stroke-opacity="0.1" stroke-width="15"/>
                <path d="M465.557 273.5V273.5C465.557 252.521 465.557 242.032 461.894 233.845C457.677 224.421 450.136 216.88 440.712 212.663C432.526 209 422.036 209 401.057 209H200.933C182.626 209 173.472 209 165.842 207.595C131.158 201.211 104.02 174.072 97.6352 139.389C96.2306 131.758 96.2306 122.605 96.2306 104.298V104.298C96.2306 90.0832 96.2306 82.9758 95.1399 77.0512C90.1824 50.1204 69.1101 29.0482 42.1793 24.0906C36.2547 23 29.1473 23 14.9325 23H-111" stroke="white" stroke-opacity="0.1" stroke-width="15"/>
                <path d="M1393 559V559C1393 579.979 1393 590.468 1396.66 598.655C1400.88 608.079 1408.42 615.62 1417.85 619.837C1426.03 623.5 1436.52 623.5 1457.5 623.5H1657.62C1675.93 623.5 1685.08 623.5 1692.72 624.905C1727.4 631.289 1754.54 658.428 1760.92 693.111C1762.33 700.742 1762.33 709.895 1762.33 728.202V728.202C1762.33 742.417 1762.33 749.524 1763.42 755.449C1768.37 782.38 1789.45 803.452 1816.38 808.409C1822.3 809.5 1829.41 809.5 1843.62 809.5H1969.56" stroke="white" stroke-opacity="0.1" stroke-width="15"/>
                <path d="M1375 258.5V258.5C1375 237.521 1375 227.032 1378.66 218.845C1382.88 209.421 1390.42 201.88 1399.85 197.663C1408.03 194 1418.52 194 1439.5 194H1639.62C1657.93 194 1667.08 194 1674.72 192.595C1709.4 186.211 1736.54 159.072 1742.92 124.389C1744.33 116.758 1744.33 107.605 1744.33 89.298V89.298C1744.33 75.0832 1744.33 67.9758 1745.42 62.0512C1750.37 35.1204 1771.45 14.0482 1798.38 9.09063C1804.3 8 1811.41 8 1825.62 8H1951.56" stroke="white" stroke-opacity="0.1" stroke-width="15"/>
            </svg> */}
            <div className="about about-text">
                <h1 className="about headerText">About Us</h1>
                <p className="about para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="about image-wrap">
                <img className="about about-image" src={process.env.PUBLIC_URL + 'images/sample.jpg'} />
                <img className="about about-image" src={process.env.PUBLIC_URL + 'images/sample.jpg'} />
            </div>
        </div>
    )
}

export default AboutUs
