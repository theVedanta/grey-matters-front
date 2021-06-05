import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const MemberCard = ({ img, name, post, socials, index, id }) => {
  return (
    <div
      className={index < 2 ? "memberCard bigMemberCard" : "memberCard"}
      key={id}
    >
      <div className="img">
        <img
          src={`https://grey-matters.herokuapp.com/img/${img}`}
          alt="Member Image"
        />
      </div>
      <h3>{name}</h3>
      <h4>{post}</h4>
      <div className="socials">
        {socials.map((social) => {
          return (
            <a key={socials.indexOf(social)} href={social.URL}>
              {checkIcon(social.platform)}
            </a>
          );
        })}
      </div>
    </div>
  );

  function checkIcon(platform) {
    if (platform === "facebook") {
      return <FaFacebook />;
    } else if (platform === "twitter") {
      return <FaTwitter />;
    } else if (platform === "github") {
      return <FaGithub />;
    }
  }
};

export default MemberCard;
