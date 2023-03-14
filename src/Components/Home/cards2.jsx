import React from 'react'
import Card2 from './Card2'

function Cards2() {
  return (
    <div style={{background:"#e9efff",width:'100%',height:"100vh"}}>
        <h2 style={{padding:'20px'}}>What we do?</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'30px',alignItems:'center',justifyContent:'center',height:'80%',width:"100%",overflowX:"scroll",flexWrap:'wrap'}}>
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
        </div>
    </div>
  )
}

export default Cards2