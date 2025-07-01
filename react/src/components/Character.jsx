import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css"


function Character() {
  const [data, setData] = useState(0)
  let { id } = useParams();
  id = id.replace(/:/g, "")
  id = parseInt(id)
  const URL  = `http://localhost:3000/api/characters`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        console.log(json)

        console.log(id)

        // Filter the data to find the object with id = 1
        const itemWithId1 = json.find(item => item.id === id); 
        setData(itemWithId1); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 

  //if (!data) {
    //return <div>Loading...</div>; // Display loading state
  //}

  if (!data){
    return (
      <>
      <div>
        <h1>No data found</h1>
        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
      </>
    )
  }

  return (

    <>
      <div>
        <h1 >{data.name} </h1>

        <div className="card">Height: {data.height}cm</div>
        <div className="card">Mass: {data.mass}kg</div>
        <div className="card">Born: {data.birth_year}</div>

        <h2>Homeworld</h2>
        <div className="card">Homeworld Id: {data.homeworld} (Need to implement)</div>
        <h2>Films Appeared In</h2>
        <div className="card">(Need to implement)</div>


        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
    </>
  )
}

export default Character