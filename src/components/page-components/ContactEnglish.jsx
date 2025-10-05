import React from 'react'
import ContactGroup from '../ContactGroup'


function Contact({ }) {
  return (
    <div className="form" style={{backgroundColor: "white", marginTop:"400px"}}>
      <form className="formulario" action="https://formsubmit.co/anna.taules@gmail.com" method="POST">
       <h2>Formulario de contacto</h2>
        <fieldset className="form-columns-2">
          <ContactGroup 
            name="name" 
            type="text" 
            title="tu nombre"
            label="Name" 
            />
          <ContactGroup 
            name="telefon"
            type="text"
            title="tu teléfono"
            label="Phone Number"
          />
        </fieldset>
        <fieldset className="form-columns-1">
          <ContactGroup
              name="email"
              type="email"
              title="tu correo electrónico"
              label="Email"
          />
        </fieldset>
        <fieldset className="form-columns-1">
          <ContactGroup
              name="message"
              type="text"
              title="leave us your message"
              label="Message"
          />
        </fieldset>
        <div className="submit">
          <input className="button" type="submit" value="submit" />
        </div>

        
    </form>
    
</div>
  )
}

export default Contact