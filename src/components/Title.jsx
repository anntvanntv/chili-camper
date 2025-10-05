import React from 'react'

function Title({ text, classes, children }) {
  return (
    <>
    <div className="title-flex">
    <h1 className={`title ${classes}`}>{text}</h1>
    {children}
    </div>
    </>
  )
}

export default Title