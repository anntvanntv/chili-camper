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
import wagen13 from "./img/wagen13.webp";
import wagen5 from "./img/wagen5.webp";
import wagen11 from "./img/wagen11.webp";
import wagen12 from "./img/wagen12.webp";


//PAGES
import Contact from "./components/page-components/Contact";
import Pricesenglish from "./components/page-components/Pricesenglish";
import Pictures from "./components/page-components/Pictures";

const pictures = [wagen12, wagen5, wagen10, wagen13, wagen11, wagen1, wagen2, wagen3];

function App() {
  //STATES
  //picture State
  const [pictureShow, setPictureShow] = useState(0);

  //pictures show state
  const [showPictures, setShowPictures] = useState(false);

  //Prices stat
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
      <div className="App">
        <Header>
          <div className="header-content">
            <nav>
              <ul>
                <li>
                  <a onClick={handleShowPrices} style={{ cursor: "pointer" }}>
                    PRICES
                  </a>
                </li>

                <li>
                  <a
                    onClick={handleScrollToContact}
                    style={{ cursor: "pointer" }}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
            <Title text="DISCOVERING CHILE" classes={"text-center title"}>
              <h1 className="ccamper">CHILI CAMPER</h1>
            </Title>
          </div>
        </Header>

        <main>
          <section className="card-section">
            <div className="d-flex">
              <Card
                cardHeader={"PICTURES"}
                onClick={handleShowPictures}
                classes="card-hover"
              >
                <div className="foto album" style={{ maxHeight: "auto" }}></div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowPictures();
                  }}
                  text="PICTURES"
                ></Button>
              </Card>
              <Card
                cardHeader={"PRICES"}
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
                  text="PRICES"
                ></Button>
              </Card>

              <Card
                cardHeader={"CONTACT"}
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
                  text="CONTACT"
                ></Button>
              </Card>
            </div>
          </section>
          <section className="text-section">
            <h2>DISCOVER CHILE WITH CHILI CAMPER</h2>
            <p className="mb-25">
              Rent our <span className="fw-600">fully equipped 4x4</span> van and travel through Chile from the
              Atacama Desert to Patagonia. Our camper is durable, comfortable,
              and ideal for couples or families looking for a unique travel
              experience with complete freedom.
            </p>
            <h3 className="mb-10">Equipment</h3>
            <p className="mb-25">
              Main <span className="fw-600">bed for 2 adults</span> (2.5 beds) and an <span className="fw-600">extra bed for 2 children</span>.{" "}
              <br /> <span className="fw-600">Full kitchen</span> with gas and utensils. <br /> Indoor table.{" "}
              <br />
              <span className="fw-600">Solar energy and gas heating</span> for cold nights. <br /> Drinking
              water tank. <br /> Camping chairs and awning for outdoor
              enjoyment. <br />{" "}
            </p>
            <h3 className="mb-10">Información importante</h3>
            <p className="mb-25">
              Pick-up and drop-off in Santiago (other locations by prior
              arrangement). <br /> Available only for travel within Chile.{" "}
              <br /> <span className="fw-600">Includes vehicle insurance and basic emergency assistance.</span>{" "}
              <br /> <span className="fw-600">Minimum driver age: 21.</span> <br /> We recommend booking in
              advance.
            </p>
            <p className="mb-10 fw-600">
              Check out our introductory offers and begin your adventure with
              Chili Camper.
            </p>
          </section>
          <section ref={contactRef} className="contact-section">
            <Contact
              title="CONTACT FORM"
              submitText="SUBMIT"
              fields={[
                {
                  columns: 2,
                  inputs: [
                    {
                      name: "name",
                      type: "text",
                      title: "your name",
                      label: "Name",
                    },
                    {
                      name: "surname",
                      type: "text",
                      title: "your surname",
                      label: "Surname",
                    },
                  ],
                },
                {
                  columns: 2,
                  inputs: [
                    {
                      name: "telefon",
                      type: "text",
                      title: "your phone number",
                      label: "Phone Number",
                    },
                    {
                      name: "email",
                      type: "email",
                      title: "your email",
                      label: "Email",
                    },
                  ],
                },
                {
                  columns: 1,
                  inputs: [
                    {
                      name: "message",
                      type: "textarea",
                      title: "your message",
                      label: "Message",
                      inputClassName: "message-fieldform",
                      textareaProps: { rows: 4 },
                    },
                  ],
                },
              ]}
            >
              <div className="impressum">
                <NavLink to="/politicaprivenglish" className="nav-link">
                  Privacy Policy
                </NavLink>
                &nbsp; - &nbsp;
                <NavLink to="/creditosen" className="nav-link">
                  Credits
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
          title={"Pictures"}
          text={"Photo Gallery"}
          cancelEvent={handleShowPictures}
          changePicture={changePicture}
          pictureShow={pictureShow}
          pictures={pictures}
        />
      )}
      {showPrices && (
        <Pricesenglish
          title={"Prices"}
          text={"Price List"}
          cancelEvent={handleShowPrices}
        />
      )}
    </>
  );
}

export default App;
