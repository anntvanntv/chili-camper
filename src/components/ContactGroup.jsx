import React from 'react'

function ContactGroup({type, name, title, id, label, inputClassName, fieldformClassName, textareaProps }) {
  return (
    <div className={`fieldform ${fieldformClassName || inputClassName}`}>
         <label htmlFor={name}><span>{label}</span></label>
            <div className="input">
              {type === "textarea" ? (
                  <textarea
                      className={`casilla ${inputClassName}`}
                      name={name}
                      title={title}
                      id={id}
                      required 
                      {...textareaProps} 
                   />
               ) : (   
             
                  <input 
                        className={` casilla ${inputClassName}`}
                        type={type} 
                        name={name} 
                        title={title} 
                        id={id}
                        required 
                    />
                )}
              </div>
          </div>
  )
}

export default ContactGroup