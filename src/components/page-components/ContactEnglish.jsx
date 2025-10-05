import React from 'react'
import ContactGroup from '../ContactGroup'


function Contact({ }) {
  return (
    <div className="form" style={{backgroundColor: "white", marginTop:"400px"}}>
      <form className="formulario" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="c33ea97a-7182-4bfb-bf50-de7505edd20a" />
      <input type="hidden" name="subject" value="Nuevo mensaje desde Chili-Camper" />
      <input type="hidden" name="from_name" value="Chili Camper Web" />
      <input type="hidden" name="captcha" value="false" />
       <h2>Formulario de contacto</h2>
        <fieldset className="form-columns-2">
          <ContactGroup 
            name="name" 
            type="text" 
            title="tu nombre"
            label="Name" 
            required
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
              required
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