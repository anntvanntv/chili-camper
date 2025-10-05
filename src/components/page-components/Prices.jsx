import React from "react";
import Button from "../Button";
import Header from "../Header";
import Title from "../Title";
import PricesCard from "../PricesCard";
import { IoIosArrowRoundBack } from "react-icons/io";

function Prices({ title, text, cancelEvent, children, classes }) {
  const elementosLista = [
    {
      title: "7-14 días",
      text: "$180.000/día",
    },
    {
      title: "Más de 15 días",
      text: "$150.000/día",
    },
  ];
  return (
    <>
      <div className="prices">
        <div className="prices-content fadeIn-2ms c-black">
          <h1 className="mb-4 fw-600">{title}</h1>

          {elementosLista.map((offer, index) => (
            <PricesCard key={index} title={offer.title} text={offer.text} titleClass="fw-600">
      
            </PricesCard>
          ))}
          <PricesCard>
            <h1 className="mb-4 mt-10 fw-600">Formas de pago</h1>
            <p> 50% del total 30 días antes del arriendo. 50% restante al
                momento de entrega de la Camper. Transferencia bancaria o Paypal{" "}
              </p>
          </PricesCard>
          <PricesCard className="mb-10">
            <h1 className="mb-4 mt-10 fw-600">Garantía</h1>
            <p> $2.000.000 el día de salida y será devuelta al momento de
            devolver la Camper en las condiciones que fue entregada.</p>
          </PricesCard>

          <div className="d-flex space-between w-98">
            <Button classes="mt-10 btn-arrow" text={<IoIosArrowRoundBack />} onClick={cancelEvent} />
          </div>
        </div>"
      </div>
    </>
  );
}

export default Prices;
