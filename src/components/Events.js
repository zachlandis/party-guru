import React, { useEffect, useState } from "react";
import EventList from "./EventList";
import Header from "./Header";
import '../index.css';

function Events() {
    const [events, setEvents] = useState([])
    const [search, setSearch] = useState("")
    const [showForm, setShowForm] = useState(false)

    const api = "http://localhost:3000/events"

    useEffect(() => {
        fetch(api)
            .then(r => r.json())
            .then(data => setEvents(data))
    }, [])


    function addEvent(addedEvent) {
        setEvents([...events, addedEvent])
    } 

    // const filteredEvents = events.filter((oneEvent) => {
    //     if (search === "") {
    //         return events;
    //     } else if (oneEvent.eventName.toLowerCase().includes(search.toLowerCase())) {
    //         return oneEvent;
    //     }
    // })

    return (
        <div>
            <Header search={search} setSearch={setSearch} showForm={showForm} setShowForm={setShowForm} onAddEvent={addEvent} />
            <br/>
            <EventList concerts={events}/>
        </div>
    )
}

export default Events