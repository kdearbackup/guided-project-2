// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import { useState } from 'react'
import React from 'react'
import Character from './components/Character'
import Planet from './components/Planet';
import Film from './components/Film';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:id" element = {<Character />} />
        <Route path="planets/:id" element = {<Planet />} />
        <Route path="films/:id" element = {<Film />} />
      </Routes>
    </Router>
  );
}

export default App;
