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
            <Link onClick={triggerSide} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={triggerSide} to="/members">
              Members
            </Link>
          </li>
          <li>
            <Link onClick={triggerSide} to="/alumni">
              Alumni
            </Link>
          </li>
          <li>
            <Link onClick={triggerSide} to="/archive">
              Archive
            </Link>
          </li>
          <li>
            <Link onClick={triggerSide} to="/announcements">
              Announcements
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://discord.gg/TESjp2sNFd"
              className="sideBtn"
            >
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
