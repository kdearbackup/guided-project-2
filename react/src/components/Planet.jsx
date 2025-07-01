import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css"


function Planet() {
  const [data, setData] = useState(0)
  let { id } = useParams();
  id = id.replace(/:/g, "")
  id = parseInt(id)
  const URL  = `http://localhost:3000/api/planets`

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

        <h2>Facts</h2>
        <div className="card">Climate: {data.climate}</div>
        <div className="card">Diameter: {data.diameter}</div>
        <div className="card">Population: {data.population}</div>


        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
    </>
  )
}

export default Planet