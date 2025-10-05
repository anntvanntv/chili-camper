import React from "react";
import Button from "../Button";
import Header from "../Header";
import Title from "../Title";
import PricesCard from "../PricesCard";
import { IoIosArrowRoundBack } from "react-icons/io";

function Prices({ title, text, cancelEvent, children, classes }) {
  const elementosLista = [
    {
      title: "7-14 days",
      text: "$180.000/day",
    },
    {
      title: "More than 15 days",
      text: "$150.000/day",
    },
  ];
  return (
    <>
      <div className="prices">
        <div className="prices-content fadeIn-2ms c-black">
          <h1 className="mb-4 fw-600">{title}</h1>

          {elementosLista.map((offer, index) => (
            <PricesCard
              key={index}
              title={offer.title}
              text={offer.text}
              titleClass="fw-600"
            ></PricesCard>
          ))}
          <PricesCard>
            <h1 className="mb-4 mt-10 fw-600">Payment</h1>
            <p>
              {" "}
              50% of the total due 30 days before the rental date. The remaining
              50% is due upon delivery of the camper. Bank transfer or PayPal.{" "}
            </p>
          </PricesCard>
          <PricesCard className="mb-10">
            <h1 className="mb-4 mt-10 fw-600">Deposit</h1>
            <p>
              {" "}
              $2,000,000 on the day of departure and will be refunded upon
              return of the Camper in the condition it was delivered.
            </p>
          </PricesCard>

          <div className="d-flex space-between w-98">
            <Button
              classes="mt-10 btn-arrow"
              text={<IoIosArrowRoundBack />}
              onClick={cancelEvent}
            />
          </div>
        </div>
        "
      </div>
    </>
  );
}

export default Prices;
