import React from "react";
import { Link } from "react-router-dom"

function EventItem({ concert }) {

    const { id, eventName, eventVenue, eventDate } = concert

    return (
        <div key={id} id="calendar-divs">
                <h3 id="calendar-text">{eventName}</h3>
                <h5 id="calendar-text">{eventVenue}</h5>
                <h6 id="calendar-text">{eventDate}</h6>
            <br/>
                <Link to={`/events/${id}`} id="white-text" >See More</Link>
            </div>
    )
}

export default EventItem