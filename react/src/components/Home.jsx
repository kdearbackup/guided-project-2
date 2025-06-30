import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import CharacterContainer from './characterContainer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Star Wars Guided Project 2</h1>
        <CharacterContainer />
      </div>
    </>
  )
}

export default Home