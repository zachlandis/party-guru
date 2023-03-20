import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom"

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Events from './Events';


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
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="*" element={<h1>404 not found</h1>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
