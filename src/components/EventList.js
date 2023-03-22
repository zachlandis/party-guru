import React from "react";
import { Link } from "react-router-dom"

function EventList({ concerts }) {


    return (
        <div id="event-list-div">
            {concerts.map((eachEvent) => (
            <div key={eachEvent.id} id="calendar-divs">
                <h3 id="calendar-text">{eachEvent.eventName}</h3>
                <h5 id="calendar-text">{eachEvent.eventVenue}</h5>
                <h6 id="calendar-text">{eachEvent.eventDate}</h6>
            <br/>
                <Link to={`/events/${eachEvent.id}`} id="white-text" >See More</Link>
            </div>
            ))}
        </div>
    )
}

export default EventList;