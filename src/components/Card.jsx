import React from 'react'
import '../index.css'




function Card({ cardHeader, cardText, children, classes, card, onClick, style }) {
  
  const cardHeaderStyle = {
    /* minWidth: 300, */
    minHeight: 150,
    padding: "1rem",
    backgroundColor: "#19191a",
    
  }
  const cardBodyStyle ={
  
    margin: "0",
    display: "flex",
    flexDirection: "column",
    flex:1,
  }
  /* const fotoCard = "./img/perrito.jpeg" */


  return (
    <article className={`card ${classes}`}
     onClick={onClick}
     style ={{cursor: onClick ? "pointer" : undefined, ...style}}
    >
      {cardHeader  && <header className='text-card text-left' style={cardHeaderStyle}><h3>{cardHeader}</h3><h2>CHILI CAMPER</h2></header>}
      <section className='section-in-card' style={cardBodyStyle}>
        <p>{cardText}</p>
        {children}
      </section>
    
    
    </article>
  )
}

export default Card