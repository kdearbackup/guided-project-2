// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import { useState } from 'react'
import React from 'react'
import Character from './components/Character'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:id" element = {<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
