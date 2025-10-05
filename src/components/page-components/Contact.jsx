import React from 'react'
import ContactGroup from '../ContactGroup'


function Contact({ children, title, fields=[], submitText }) {
  return (
    <div className="form" style={{backgroundColor: "white"}}>
      <form className="formulario" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="c33ea97a-7182-4bfb-bf50-de7505edd20a" />
      <input type="hidden" name="subject" value="Nuevo mensaje desde Chili-Camper" />
      <input type="hidden" name="from_name" value="Chili Camper Web" />
       <h2>{title}</h2>

         { fields.map((fieldset, i) => (
            <fieldset key={i} className={`form-columns-${fieldset.columns}`}>
               {fieldset.inputs.map((inputProps, j) => (
                  <ContactGroup key={j} {...inputProps} />
               ))}
            </fieldset>
          ))}

 
        <div className="submit">
          <input className="button" type="submit" value={submitText} />
        </div>

        
    </form>
    {children}
</div>
  )
}

export default Contact