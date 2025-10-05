import React from 'react'

function Button({ classes, type, style, text, onClick, icon}) {
  return (
    <button
    type={type}
    className={`btn ${classes} `}
    style={style}
    onClick={onClick}
    
    >
      <div className="d-flex-btn">
        {icon}
        {text ? text : "Button"}
      </div>
    </button>
  )
}

export default Button