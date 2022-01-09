import React, { useEffect, useState } from "react";
import "./Announcements.css";

function Events() {
    useEffect(() => {
        fetchEvents();
    }, []);

    const [events, setEvents] = useState(["none"]);

    async function fetchEvents() {
        const data = await fetch("https://grey-back.herokuapp.com/events", {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });

        const events = await data.json();
        setEvents(events.events.reverse());
    }

    const styles = {
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };

    return (
        <div className="events events-container">
            <div className="events header-wrap">
                <h1 className="events header-text">Announcements</h1>
            </div>
            {events.length !== 0 ? (
                events.map((event) => {
                    return (
                        <React.Fragment key={event._id}>
                            <h2
                                className="events eventTitle big"
                                key={event._id}
                            >
                                {event.title}
                            </h2>
                            <div className="events event-box">
                                <img
                                    className="events event-image"
                                    src={`https://grey-back.herokuapp.com/img/${event.image}`}
                                />
                                {/* <img className="events event-image" src={process.env.PUBLIC_URL + 'images/logo.png'} /> */}
                                <h2
                                    className="events eventTitle media"
                                    key={event._id}
                                >
                                    {event.title}
                                </h2>
                                <div className="events content-wrap">
                                    <p className="events eventContent">
                                        {event.content}
                                    </p>
                                    <div className="events linkwrap">
                                        <a
                                            className="events reg-btn"
                                            href={event.link}
                                            target="_blank"
                                        >
                                            Register Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })
            ) : (
                <div style={styles} className="emp">
                    <h1>No Data to display</h1>
                </div>
            )}
        </div>
    );
}

export default Events;
