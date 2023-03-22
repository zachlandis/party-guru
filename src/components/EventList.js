import React from "react";
import EventItem from "./EventItem";


function EventList({ concerts }) {


    return (
        <div id="event-list-div">
            {concerts.map((eachEvent) => (
            <EventItem concert={eachEvent} key={eachEvent.id} />
            ))}
        </div>
    )
}

export default EventList;