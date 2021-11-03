import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="container">
      <Link
        to="/"
        style={{ color: "#fff", textDecoration: "none", fontWeight: "900" }}
        className="logo"
      >
        Grey Matters
      </Link>
      <div className="link-wrap">
        <Link className="Link" exact="true" to="/">
          Home
        </Link>
        <Link className="Link" to="/members">
          Members
        </Link>
        <Link className="Link" to="/alumni">
          Alumni
        </Link>
        <Link className="Link" to="/archive">
          Archive
        </Link>
        <Link className="Link" to="/announcements">
          Announcements
        </Link>
      </div>
      <a
        target="_blank"
        href="https://discord.gg/raGFW3SMKd"
        className="navBtn"
      >
        Join Discord
      </a>
    </nav>
  );
}

export default NavBar;
