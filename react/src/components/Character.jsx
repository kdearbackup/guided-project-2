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
        setData(itemWithId1); // Update state with the found item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []); // Empty dependency array ensures this runs only once on mount

  //if (!data) {
    //return <div>Loading...</div>; // Display loading state
  //}

  return (

    <>
      <div>
        <h1> About Page for character {data.name} </h1>

        <h3><Link to= "/">Go Back to Main Page</Link></h3>
      </div>
    </>
  )
}

export default Character