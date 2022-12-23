import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import "./members.css";

function Members() {
    useEffect(() => {
        fetchMembers();
    }, []);

    const [members, setMembers] = useState([]);

    async function fetchMembers() {
        const data = await fetch("https://grey-mater.onrender.com/members", {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        const members = await data.json();
        setMembers(members.members);
    }

    return (
        <>
            <div className="container">
                <div style={{ textAlign: "center" }} className="pageTitle">
                    <h1 className="pageHead">The Team</h1>
                </div>
                <div className="members">
                    {members.map((member) => {
                        return (
                            <MemberCard
                                img={member.image}
                                name={member.name}
                                post={member.event}
                                socials={member.socials}
                                index={members.indexOf(member)}
                                key={member._id}
                                id={member._id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Members;
