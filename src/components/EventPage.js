import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import '../index.css';


function EventPage() {
    const [eventPage, setEventPage] = useState([])
    const { id } = useParams()

    const {eventName, eventDate, eventVenue, ticketLink, posterBanner, eventDescription} = eventPage

    useEffect(() => {
        fetch(`http://localhost:3000/events/${id}`)
            .then(r => r.json())
            .then(data => setEventPage(data))
    }, [id])

    if(!eventPage) return <h2 id="white-text">Loading...</h2>    

    return (
        <div className="event-page-div">
            <div className="event-page-text">
                <h1>{eventName}</h1>
                <h2>{eventVenue}</h2>
                <h3>{eventDate}</h3>
                <img className="event-poster" src={posterBanner} alt="poster" />
                <p id="event-description" >{eventDescription}</p>
            </div>
            <br/>
            <a  id="ticket-link" href={ticketLink}>Buy Tickets</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    )
}

export default EventPage