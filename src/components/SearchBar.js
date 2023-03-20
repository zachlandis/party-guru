import React from "react";
import '../index.css';

function SearchBar({search, setSearch, showForm, setShowForm}) {
    

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleCreateEventClick() {
        setShowForm(!showForm)
    }

    return (
        <div id="search-bar">
            <div id="search-bar-content">
                <input 
                    type="text" 
                    id="search"
                    placeholder="Search by Event Name"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <div id="search-bar-content"> {/* Turn into anchor */}
                <button onClick={handleCreateEventClick}>Create Your Own Event</button>
            </div>
        </div>
    )
}

export default SearchBar