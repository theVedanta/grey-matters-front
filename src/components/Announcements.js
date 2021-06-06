import React, { useEffect, useState } from "react";
import "./Announcements.css";

function Events() {
  useEffect(() => {
    fetchEvents();
  }, []);

  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const data = await fetch("https://grey-matters.herokuapp.com/events");

    const events = await data.json();
    setEvents(events.events);
    // console.log(events)
  }

  console.log(events[0]);

  return (
    <div className="events events-container">
      <div className="events header-wrap">
        <h1 className="events header-text">Announcemnets</h1>
      </div>
      {events.map((event) => {
        return (
          <React.Fragment key={event._id}>
            <h2 className="events eventTitle big" key={event._id}>
              {event.title}
            </h2>
            <div className="events event-box">
              <img
                className="events event-image"
                src={`https://grey-matters.herokuapp.com/img/${event.image}`}
              />
              {/* <img className="events event-image" src={process.env.PUBLIC_URL + 'images/logo.png'} /> */}
              <h2 className="events eventTitle media" key={event._id}>
                {event.title}
              </h2>
              <p className="events eventContent">{event.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Events;
