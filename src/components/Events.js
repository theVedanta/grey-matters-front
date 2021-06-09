import React, { useEffect, useState } from "react";
import "./Events.css";

function Events() {
  useEffect(() => {
    fetchEvents();
  }, []);

  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const data = await fetch("http://localhost:5001/events");

    const events = await data.json();
    setEvents(events.events);
    // console.log(events)
  }

  console.log(events[0]);

  return (
    <div className="events events-container">
      <div className="events header-wrap">
        <h1 className="events header-text">Events</h1>
      </div>
      {events.map((event) => {
        return (
          <>
            <h2 className="events eventTitle" key={event._id}>
              {event.title}
            </h2>
            <div className="events event-box">
              {/* <img className="events event-image" src={`https://grey-matters.herokuapp.com/img/${event.image}`} /> */}
              <img
                className="events event-image"
                src={process.env.PUBLIC_URL + "images/logo.png"}
              />
              <p className="events eventContent">{event.content}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Events;

// { <h2 className="eventName" key={event._id}>{event.title}</h2>
// <p className="eventEvent">{event.content}</p>
// <img src={`https://grey-matters.herokuapp.com/img/${event.image}`}/>
// <p>{event.image}</p>}
