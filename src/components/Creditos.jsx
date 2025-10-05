import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

function Creditos() {
  return (
    <div className="creditos" style={{  color:"black"}}>
       <h1 className='mb-6'>CHILI CAMPER </h1>
       <h3  style={{fontWeight: "600", marginBottom: "8px"}}>INFORMACIÓN DE CONTACTO</h3>
       <div className="text-creditos">
      
          <h3>Laura Hurtado - Santiago de Chile</h3>
          <p><a href="mailto:info@chilicamper.com">info@chilicamper.com</a></p>
          
          <p className='mb-6 developer'>Web creada por: <a href="https://annatv.click/">Anna Taulés</a></p>
       </div>
       <NavLink to={`/home`} className="nav-link-creditos" size={12}>  <FaArrowLeft size={12}  />  VOLVER</NavLink>
    </div>
  )
}

export default Creditos