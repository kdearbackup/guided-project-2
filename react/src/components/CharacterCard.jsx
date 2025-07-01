import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"


const CharacterCard = ({name, id}) => {

    const link = `/character/:${id}`

    return (
      <div style={{
        backgroundColor: 'lavender', 
        border: '1px solid black', 
        padding: '10px',
        borderRadius: '20px' 
        
      }}>
        <h3><Link to= {link}>{name}</Link></h3>
      </div>
    )
  }
  

export default CharacterCard