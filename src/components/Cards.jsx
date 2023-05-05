import React from "react";
import cards from "../json/cards.json";

const Cards = () => {
  return (
    <section className="section-cards">
      <div className="card-header">
      <h1>OUR CREATIONS</h1>
      <button>SEE ALL</button>
      </div>
      <div className="cards">
        {cards &&
          cards.map((element) => {
            return <div key={element.id} className={element.class}>
              <h2>{element.name}</h2>
            </div>;
          })}
      </div>
      <div className="btn-mobile-cards">
          <button>SEE ALL</button>
        </div>
    </section>
  );
};

export default Cards;
