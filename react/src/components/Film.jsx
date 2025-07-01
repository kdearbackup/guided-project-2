import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css"


function Film() {
  const [data, setData] = useState(0)
  let { id } = useParams();
  id = id.replace(/:/g, "")
  id = parseInt(id)
  const URL  = `http://localhost:3000/api/films`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        console.log(json)

        console.log(json[id])

        const itemWithId = json[id]
        //json.find(item => item.id === id); 
        setData(itemWithId); 
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
        <h1 >{data.title} </h1>

        <h2>Description</h2>
        <p>{data.opening_crawl}</p>
        <h2>Director: {data.director}</h2>
        <h2>Release Date: {data.release_date}</h2>

        <h2>Appearing Characters</h2>
    

        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
    </>
  )
}

export default Film