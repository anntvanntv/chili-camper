import React from 'react'

function PricesCard({style, text, children, title, titleClass }) {
  return (
    <div>
     
        <div style={{display: "flex", gap: "8px"}}>
        {title && <p>{title}</p>}
        {text && <p className={titleClass}>{text}</p>}
        </div>
        {children}
    </div>
  )
}

export default PricesCard