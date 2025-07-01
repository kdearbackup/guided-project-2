import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css"
import CharacterCard from './characterCard';


function Film() {
  const [data, setData] = useState(0)
  const [characterData, setCharacterData] = useState(0)
  const[characterArrayData, setCharacterArrayData] = useState([])
  
  let { id } = useParams();
  id = id.replace(/:/g, "")
  id = parseInt(id)
  const URL  = `http://localhost:3000/api/films`
  const characterArray = []

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
  }, [id]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(data)
        const URL2  = `http://localhost:3000/api/films/${data.id}/characters`
        const response = await fetch(URL2); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        console.log(json)

        //console.log(json[id])

        //const itemWithId = json[id]
        //json.find(item => item.id === id); 
        setCharacterData(json); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [data]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(characterData)

        for (let i = 0; i < characterData.length; i++){
            console.log(characterData[i])
            const URL3 = `http://localhost:3000/api/characters/${characterData[i].character_id}/`
            const response = await fetch(URL3); 
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();

            console.log(json)
            characterArray.push(json)
        }
        
        console.log(characterArray)
        setCharacterArrayData(characterArray)

        //console.log(json[id])

        //const itemWithId = json[id]
        //json.find(item => item.id === id); 
        //setCharacterData(json); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [characterData, characterArray]); 




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
        {characterArrayData.length > 0 && ( 
          <div className="character-cards-container"> 
            {characterArrayData.map(character =>  (
              <CharacterCard
              key={character.id} 
              name={character.name} // Access the 'name' property of the character object
              id= {character.id} />
            ))}
          </div>
        )}
    

        <div className="backCard"><Link to= "/"> Back </Link></div>
      </div>
    </>
  )
}

export default Film