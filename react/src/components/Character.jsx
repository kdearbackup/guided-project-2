import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css"


function Character() {
  const [data, setData] = useState(0)
  const [planet, setPlanetData] = useState(0)
  const [film, setFilmData] = useState(0)
  const [filmNames, setFilmNameData] = useState([])
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

        //console.log(json)

        //console.log(id)

        const itemWithId1 = json.find(item => item.id === id); 
        setData(itemWithId1); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [id]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log(data)
        const URL2 = `http://localhost:3000/api/planets/${data.homeworld}`
        const response = await fetch(URL2);
         
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        //console.log(json)

        //console.log(id)

        
        setPlanetData(json); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [data]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log(data)
        const URL3 = `http://localhost:3000/api/characters/${id}/films`
        const response = await fetch(URL3);
         
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        //console.log(json)

        //console.log(id)

        
        setFilmData(json); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filmArray = []
        for (let i = 0; i < film.length; i++){
          //console.log(film[i])
          const URL3 = `http://localhost:3000/api/films/${film[i].film_id}`
          const response = await fetch(URL3); 
          if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();

          //console.log(json)
          filmArray.push(json)
      }
      
      //console.log(filmArray)
      setFilmNameData(filmArray)
    } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [data]);

  
  

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
  if (!data.homeworld){
    return (
      <>
      <div>
        <h1>No planet found</h1>
        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
      </>
    )
  }
  

  const homeworldLink = `/planets/${data.homeworld}`
  const filmLink = `/films/${film.film_id}`
  //GET ID PROPERLY

  return (

    

    <>
      <div>
        <h1 >{data.name} </h1>

        <div className="card">Height: {data.height}cm</div>
        <div className="card">Mass: {data.mass}kg</div>
        <div className="card">Born: {data.birth_year}</div>

        <h2>Homeworld</h2>
        <div className="card"><Link to={homeworldLink} > {planet.name}</Link></div>
        <h2>Films Appeared In</h2>
        
        {filmNames.length > 0 && ( 
          <div > 
            {filmNames.map(film =>  (
             <div><h3><Link to={`/films/${film.id -1 }`}>{film.title}</Link></h3></div>
            ))}
          </div>
        )}


        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
    </>
  )
}

export default Character