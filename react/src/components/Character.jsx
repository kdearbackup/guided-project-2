import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

  return (

    <>
      <div>
        <h1>{data.name} </h1>

        <h3>Height: {data.height}cm</h3>
        <h3>Mass: {data.mass}kg</h3>
        <h3>Born: {data.birth_year}</h3>

        <h2>Homeworld</h2>
        <h3>Homeworld Id: {data.homeworld} (Need to implement)</h3>
        <h2>Films Appeaed In</h2>
        <h3>(Need to implement)</h3>


        <h3><Link to= "/">Go Back to Main Page</Link></h3>
      </div>
    </>
  )
}

export default Character