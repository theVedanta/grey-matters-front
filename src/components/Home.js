import React from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import Faq from "./Faq";

function Home() {
  return (
    <>
      <div className="home top-container">
        <svg
          className="home svg"
          width="477"
          height="885"
          viewBox="0 0 477 885"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M410.909 1.3131e-06H410.462C392.331 -7.92724e-05 378.118 -0.000142692 366.834 1.20754C355.32 2.4398 345.98 4.99908 337.978 10.7175C332.822 14.4018 328.311 18.913 324.626 24.0687C318.908 32.0709 316.349 41.4108 315.116 52.9248C313.909 64.2092 313.909 78.422 313.909 96.5535V97C313.909 115.675 313.899 129.086 312.786 139.479C311.689 149.735 309.588 156.171 305.987 161.21C303.264 165.021 299.93 168.355 296.119 171.078C291.08 174.68 284.644 176.78 274.388 177.878C263.994 178.99 250.583 179 231.909 179H0.5V194H231.909H232.355H232.356C250.487 194 264.7 194 275.984 192.792C287.498 191.56 296.838 189.001 304.84 183.282C309.996 179.598 314.507 175.087 318.191 169.931C323.91 161.929 326.469 152.589 327.701 141.075C328.909 129.791 328.909 115.578 328.909 97.4464V97C328.909 78.3254 328.919 64.9143 330.031 54.521C331.129 44.265 333.229 37.8292 336.83 32.7899C339.554 28.9792 342.888 25.6448 346.699 22.9216C351.738 19.3205 358.174 17.22 368.43 16.1224C378.823 15.01 392.234 15 410.909 15H609.573V1.3131e-06H410.909ZM453.336 189L452.912 189C448.443 189 445.722 189 443.355 189.195C415.336 191.51 393.099 213.747 390.784 241.766C390.589 244.133 390.589 246.853 390.589 251.321V251.322V251.323V251.324V251.747C390.589 262.811 390.583 267.886 390.234 272.103C386.028 323.026 345.614 363.439 294.692 367.645C290.475 367.994 285.4 368 274.336 368H77.1802V383H274.336H274.824H274.825H274.826H274.827C285.279 383 291.015 383 295.927 382.594C354.159 377.784 400.373 331.57 405.183 273.338C405.589 268.426 405.589 262.69 405.589 252.239V252.238V252.237V252.236V251.747C405.589 246.725 405.595 244.67 405.733 243.001C407.444 222.291 423.88 205.855 444.59 204.144C446.259 204.006 448.314 204 453.336 204H609.573V189H453.336ZM612 502.5H97.5636V487.5H612V502.5ZM27.9429 626.5V626.795C27.9429 637.035 27.9429 645.129 28.4208 651.671C28.9087 658.35 29.9236 663.996 32.2602 669.218C37.2303 680.325 46.1177 689.213 57.2249 694.183C62.4466 696.519 68.0931 697.534 74.7719 698.022C81.3138 698.5 89.4082 698.5 99.6478 698.5H99.9429H300.067C318.707 698.5 327.013 698.531 333.8 699.781C365.424 705.602 390.168 730.346 395.989 761.969C397.238 768.756 397.27 777.062 397.27 795.702L397.269 796.697V796.697C397.269 809.967 397.268 817.702 398.484 824.307C404.005 854.298 427.472 877.765 457.463 883.285C464.067 884.501 471.801 884.501 485.07 884.5H485.073L486.068 884.5H612V869.5H486.068C471.52 869.5 465.26 869.469 460.179 868.533C436.308 864.139 417.63 845.461 413.236 821.591C412.301 816.509 412.27 810.25 412.27 795.702V794.663C412.27 777.34 412.27 767.562 410.741 759.254C403.793 721.51 374.26 691.977 336.516 685.029C328.207 683.499 318.43 683.499 301.106 683.5H301.106H300.067H99.9429C89.3433 683.5 81.7962 683.495 75.8648 683.062C70.0076 682.634 66.3162 681.818 63.3516 680.491C55.6102 677.027 49.416 670.833 45.9519 663.091C44.6253 660.127 43.8088 656.435 43.3809 650.578C42.9476 644.647 42.9429 637.1 42.9429 626.5H27.9429Z"
            fill="white"
          />
        </svg>
        <div className="home top-text-wrap">
          <div className="home top-text">
            <h1 className="home headerTop-1">Grey Matters</h1>
            <h2 className="home headerTop-2">Monochrome Minds,</h2>
            <h3 className="home headerTop-3">We Quiz.</h3>
            <a className="home learnMore">Learn More</a>
          </div>
        </div>
        <div className="home top-image">
          <div className="home top-image-wrap">
            <img className="home header-image" src="/images/logo.png" />
          </div>
        </div>
      </div>
      <AboutUs />
      <Faq />
    </>
  );
}

export default Home;
