import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

function AlumniCard() {
  useEffect(() => {
    fetchAlumnis();
  }, []);

  const [alumnis, setAlumnis] = useState([]);

  async function fetchAlumnis() {
    const data = await fetch("https://grey-back.herokuapp.com/alumni", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    const alumnis = await data.json();
    setAlumnis(alumnis.alumnis);
  }
  console.log(alumnis);

  // function Icon(props) {
  //     const isLoggedIn = props.isLoggedIn;
  //     if (isLoggedIn) {
  //       return <UserGreeting />;
  //     }
  //     return <GuestGreeting />;
  //   }

  // console.log(alumnis.map(alumni=> {
  //     console.log(alumni.name)
  // }));

  return (
    <>
      {alumnis.map((alumni) => {
        return (
          <>
            <h2 className="memberName" key={alumni._id}>
              {alumni.name}
            </h2>
            <p className="memberEvent">{alumni.event}</p>
            <img src={process.env.PUBLIC_URL + "images/topimage.png"} />
            {/* <img src={alumni.image}/> */}
            {/* <p>{alumni.image}</p> */}
            <a
              href={alumni.socials[0].URL}
              style={{ color: "white" }}
              target="_blank"
            >
              {alumni.socialPlatform}
            </a>
          </>
        );
      })}
    </>
  );
}

export default AlumniCard;
