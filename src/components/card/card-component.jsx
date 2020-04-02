import React from "react";
import "./card.styles.css";

export const Card = (
  props //So this props has one monster only.
) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <h4>{props.monster.email}</h4>
  </div>
);
