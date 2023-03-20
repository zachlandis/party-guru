import React from "react";
import SearchBar from "./SearchBar";
import EventForm from "./EventForm";

function Header({search, setSearch, showForm, setShowForm, onAddEvent}) {

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} showForm={showForm} setShowForm={setShowForm}/>
            {showForm ? <EventForm onAddEvent={onAddEvent} /> : null}
        </div>
    )
}

export default Header