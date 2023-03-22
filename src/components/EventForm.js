import React, { useState } from "react";
import '../index.css';

function EventForm({onAddEvent}) {
    const [eventName, setEventName] = useState("")
    const [eventVenue, setEventVenue] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [posterBanner, setPosterBanner] = useState("")
    const [ticketLink, setTicketLink] = useState("")

    function handleSubmit() {
        fetch("http://localhost:3000/events", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                eventName: eventName,
                eventVenue: eventVenue,
                eventDate: eventDate,
                eventdescription: eventDescription,
                ticketLink: ticketLink,
                posterBanner: posterBanner

            })
        })
            .then(r => r.json())
            .then(data => onAddEvent(data))
            setEventName("")
            setEventVenue("")
            setEventDate("")
            setEventDescription("")
            setPosterBanner("")
            setTicketLink("")

    }


    return(
        <form id="event-form" onSubmit={handleSubmit}>
            <div class="row">
                <div class="column">
                    <label>Event Details</label>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Event Name" 
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <input 
                        type="venue" 
                        placeholder="Event Venue"
                        value={eventVenue}
                        onChange={(e) => setEventVenue(e.target.value)}
                    />
                    <input 
                        type="date" 
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label>Other Details</label>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Event Description" 
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Event Poster URL" 
                        value={posterBanner}
                        onChange={(e) => setPosterBanner(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Event Ticket Link" 
                        value={ticketLink}
                        onChange={(e) => setTicketLink(e.target.value)}
                    />
                </div>
            </div>
            <input type="submit" />
            
        </form>
    )
}

export default EventForm