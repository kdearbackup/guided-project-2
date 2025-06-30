import CharacterCard from "./characterCard";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const CharacterContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:3000/api/characters");
            if (!response.ok) {
              throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setData(json_response);
            console.log("Data fetched successfully")
          } catch (error) {
            console.error('Error fetching characters:', error);
          }
        };

        fetchData();
      }, []);

    return (
        <div>
        {data.map(character => (
            <CharacterCard
              key={character.id} 
              name={character.name} // Access the 'name' property of the character object
              id= {character.id} />
          ))}
        </div>
    )
}

export default CharacterContainer;
