
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Events from './Events';
import EventPage from './EventPage';
import About from './About';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState("/")

  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
        <Route path="/about" element={<About/>}>
        </Route>
        <Route exact path="/events" element={<Events/>}>
        </Route>
        <Route path="/events/:id" element={<EventPage/>}>
        </Route>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="*" element={<h1>404 not found</h1>}>
        </Route>
      </Routes>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
