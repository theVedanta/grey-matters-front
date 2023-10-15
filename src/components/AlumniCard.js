import React, { useEffect, useState } from "react";
// import { FaGithub } from "react-icons/fa";
import MemberCard from "./MemberCard";

const AlumniCard = () => {
    useEffect(() => {
        fetchAlumnis();
    }, []);

    const [alumnis, setAlumnis] = useState([]);

    async function fetchAlumnis() {
        const data = await fetch("https://grey-matters-backend.onrender.com/alumni", {
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
            <div className="container">
                <div style={{ textAlign: "center" }} className="pageTitle">
                    <h1 className="pageHead">The Alumni</h1>
                </div>
                <div className="members">
                    {alumnis.map((alumni) => {
                        return (
                            <MemberCard
                                img={alumni.image}
                                name={alumni.name}
                                post={alumni.post}
                                socials={alumni.socials}
                                index={alumnis.indexOf(alumni)}
                                key={alumni._id}
                                id={alumni._id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default AlumniCard;
