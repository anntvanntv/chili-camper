//STYLING
import "./App.css";
import "./index.css";

import { NavLink } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";

import contactRef from "./components/ContactGroup";

//HOOKS
import React, { useState, useRef } from "react";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import Button from "./components/Button";
import ContactGroup from "./components/ContactGroup";

//FOTOS

import wagen2 from "./img/wagen2.webp";
import wagen3 from "./img/wagen3.webp";
import wagen1 from "./img/wagen1.webp";
import wagen10 from "./img/wagen10.webp";
import wagen11 from "./img/wagen11.webp";
import wagen12 from "./img/wagen12.webp";
import wagen5 from "./img/wagen5.webp";
import wagen13 from "./img/wagen13.webp";

//PAGES
import Contact from "./components/page-components/Contact";
import Prices from "./components/page-components/Prices";
import Pictures from "./components/page-components/Pictures";

const pictures = [wagen12, wagen5, wagen10, wagen13, wagen11, wagen1, wagen2, wagen3];

function App() {
  //STATES
  //picture State
  const [pictureShow, setPictureShow] = useState(0);

  //pictures show state
  const [showPictures, setShowPictures] = useState(false);

  //Prices state
  const [showPrices, setShowPrices] = useState(false);

  //References
  const contactRef = useRef();

  //HANDLERS
  //foto handler
  const changePicture = () => {
    setPictureShow((prevShow) => {
      return (prevShow + 1) % pictures.length;
    });
  };
  //foto show handler

  const handleShowPictures = () => {
    setShowPictures((prev) => !prev);
  };

  //prices handler
  const handleShowPrices = () => {
    showPrices === false ? setShowPrices(true) : setShowPrices(false);
  };

  //Scroll handle

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //EFFECTS

  //Scroll Effects
  /*  useEffect(() => {
   window.onscroll = () => 
 }) */

  return (
    <>
      <div className="app">
        <Header>
          <div className="header-content">
            <nav>
              <ul>
                <li>
                  <a onClick={handleShowPrices} style={{ cursor: "pointer" }}>
                    PRECIOS
                  </a>
                </li>

                <li>
                  <a
                    onClick={handleScrollToContact}
                    style={{ cursor: "pointer" }}
                  >
                    CONTACTO
                  </a>
                </li>
              </ul>
            </nav>
            <Title text="DESCUBRIENDO CHILE" classes={"text-center title"}>
              <h1 className="ccamper">CHILI CAMPER</h1>
            </Title>
          </div>
        </Header>

        <main>
          <section className="card-section">
            <div className="d-flex">
              <Card
                cardHeader={"FOTOS"}
                onClick={handleShowPictures}
                classes="card-hover"
              >
                <div className="foto album" style={{ maxHeight: "auto" }}></div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowPictures();
                  }}
                  text="FOTOS"
                ></Button>
              </Card>

              <Card
                cardHeader={"PRECIOS"}
                onClick={handleShowPrices}
                classes="card-hover"
              >
                <div
                  className="foto precios"
                  style={{ maxHeight: "auto" }}
                ></div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowPrices();
                  }}
                  text="PRECIOS"
                ></Button>
              </Card>
              <Card
                cardHeader={"CONTACTO"}
                onClick={handleScrollToContact}
                classes="card-hover"
              >
                <div
                  className="foto contacto"
                  style={{ maxHeight: "700px" }}
                ></div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScrollToContact();
                  }}
                  text="CONTACTO"
                ></Button>
              </Card>
            </div>
          </section>
          <section className="text-section">
            <h2>DESCUBRE CHILE CON CHILI CAMPER</h2>
            <p className="mb-25">
              Arrienda nuestra camioneta 4x4 totalmente equipada y recorre Chile
              desde el desierto de Atacama hasta la Patagonia. Nuestro camper es
              resistente, cómodo e ideal para parejas o familias que buscan una
              experiencia de viaje única y con total libertad.{" "}
            </p>
            <h3 className="mb-10">Equipamiento</h3>
            <p className="mb-25">
            <span className="fw-600">Cama principal para 2 adultos</span> (2,5 plazas) y <span className="fw-600">cama adicional para
              2 niños.</span><br /> <span className="fw-600">Cocina completa</span> con gas y utensilios.<br /> Mesa interior.<br />
              <span className="fw-600">Energía solar y calefacción a gas</span> para noches frías.<br /> Tanque de
              agua potable.<br /> Sillas de camping y toldo para disfrutar al aire
              libre.<br />{" "}
            </p>
            <h3 className="mb-10">Información importante</h3>
            <p className="mb-25">
              Entrega y devolución en Santiago (otras ubicaciones bajo acuerdo
              previo).<br /> Disponible solo para viajar dentro de Chile.<br /><span className="fw-600"> Incluye
              seguro vehicular y asistencia básica/span</span> en caso de emergencia.<br /> <span className="fw-600">Edad
              mínima del conductor: 21 años.</span><br /> Te recomendamos reservar con
              anticipación.
            </p>
            <p className="mb-10 fw-600">Consulta nuestras ofertas de lanzamiento y comienza tu aventura con Chili Camper.</p>
          </section>

          <section ref={contactRef} className="contact-section">
            <Contact
              title="FORMULARIO DE CONTACTO"
              submitText="ENVIAR"
              fields={[
                {
                  columns: 2,
                  inputs: [
                    {
                      name: "name",
                      type: "text",
                      title: "tu nombre",
                      label: "Nombre",
                    
                    },
                    {
                      name: "apellido",
                      type: "text",
                      title: "tu apellido",
                      label: "Apellido",
                    },
                  ],
                },
                {
                  columns: 2,
                  inputs: [
                    {
                      name: "telefon",
                      type: "text",
                      title: "tu teléfono",
                      label: "Número de teléfono",
                    },
                    {
                      name: "email",
                      type: "email",
                      title: "tu correo electrónico",
                      label: "Correo electrónico",
                   
                    },
                  ],
                },
                {
                  columns: 1,

                  inputs: [
                    {
                      name: "message",
                      type: "textarea",
                      title: "tu mensaje",
                      label: "Mensaje",
                      inputClassName: "message-fieldform",
                      textareaProps: { rows: 4 },
                    },
                  ],
                },
              ]}
            >
              <div className="impressum">
                <NavLink to="/politicaprivacidad" className="nav-link">
                  Política de privacidad
                </NavLink>
                &nbsp; - &nbsp;
                <NavLink to="/creditoses" className="nav-link">
                  Créditos
                </NavLink>
                <div className="xarxa">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/chilicamper/?igsh=MTJ4bGpzZDdkbjdiNA%3D%3D"
                  >
                    <p>
                      <CiInstagram />
                    </p>
                  </a>
                </div>
                <p style={{ fontSize: "15px" }}>
                  <span>&copy;2025 Chili Camper</span>
                </p>
              </div>
            </Contact>
          </section>
        </main>
      </div>
      {showPictures && (
        <Pictures
          title={"Fotos"}
          text={"Galería de fotos"}
          cancelEvent={handleShowPictures}
          changePicture={changePicture}
          pictureShow={pictureShow}
          pictures={pictures}
        />
      )}

      {showPrices && (
        <Prices
          title={"Precios"}
          text={"Lista de precios"}
          cancelEvent={handleShowPrices}
        />
      )}
    </>
  );
}

export default App;
