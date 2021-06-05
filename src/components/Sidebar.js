import { useState } from "react";
import "./side.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <FaBars className="bars" onClick={triggerSide} />
      <div className={active ? "side side-active" : "side"}>
        <FaTimes className="cross" onClick={triggerSide} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Members</Link>
          </li>
          <li>
            <Link to="/">Alumni</Link>
          </li>
          <li>
            <Link to="/">Archive</Link>
          </li>
          <li>
            <Link to="/">Events</Link>
          </li>
          <li>
            <a href="/" className="sideBtn">
              Join Discord
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  function triggerSide() {
    setActive(!active);
  }
};

export default Sidebar;
