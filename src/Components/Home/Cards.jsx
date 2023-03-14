import React from 'react'
import Card from './Card'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <div className="text">
        <p>“YOU CANNOT CREATE THE EXPERIENCE. YOU MUST UNDERGO IT”</p>
        <h2>Why Choose US </h2>
        </div>
        <div style={{display:'flex',gap:'10px',alignItems:'center',justifyContent:'center',height:'80%'}}>
        <Card/>
        <Card/>
        <Card/> 
        </div>
    </div>
  )
}

export default Cards