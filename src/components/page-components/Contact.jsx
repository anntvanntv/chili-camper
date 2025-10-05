import React from 'react'
import ContactGroup from '../ContactGroup'


function Contact({ children, title, fields=[], submitText }) {
  return (
    <div className="form" style={{backgroundColor: "white"}}>
      <form className="formulario" action="https://formsubmit.co/info@chili-camper.com" method="POST">
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