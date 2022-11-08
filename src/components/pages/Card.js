import React from "react";
import "../../assets/styles/Card.scss";
import { Store } from "../store";

const Card = () => {
  return (
    <div className="Box">
      {Store.map((e, id) => (
        <div className="Card" key={id}>
          <img className="Images" src={e.img} alt="Logo" />
          <div className="Sort">
            <span>{e.title}</span>
          </div>
          <div className="Title">
            <span>{e.text}</span>
          </div>
          <div className="BrandName">
            <span className="Brand">Niek Bove</span>
            <span className="Data">April 8, 2018 3K Views</span>
          </div>
          <div className="Text">
            <span>
              Structured gripped tape invisible moulded cups for sauppor firm
              hold strong powermesh front liner sport detail. Warmth comfort
              hangs loosely from the body large pocket at the front full button…
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
