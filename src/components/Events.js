import React, { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState([])

    const api = "http://localhost:3001/events"

    useEffect(() => {
        fetch(api)
            .then(r => r.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <h1>Events Page</h1>

    )
}

export default Events