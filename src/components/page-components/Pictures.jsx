
import Button from '../Button.jsx';
import Title from '../Title.jsx';
import Card from '../Card.jsx';
import { MdNavigateNext } from "react-icons/md";
import { IoMdClose } from "react-icons/io";;

import { useState, useRef } from 'react';
import React from 'react';




function Pictures({ title, text, cancelEvent, changePicture, pictureShow, pictures }) {
  
  return (
  <section className='prices'>
    <div  className="pictures-modal">
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={pictures[pictureShow]} alt="Foto" style={{ width: "100%" }} />
      <div className="but-pict" style={{ marginTop: "1rem" }}>
        <Button onClick={changePicture} classes="icon-pict" text={<MdNavigateNext />} />
        <Button onClick={cancelEvent} classes="icon-cl-pict" text={<IoMdClose />} />
      </div>
    </div>
  </section>
  );
}
export default Pictures