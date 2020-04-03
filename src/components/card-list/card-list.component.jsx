import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card-component";

export const CardList = (
  props //The props has an array of monster object called monsters passed by another component App in module App.js
) => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    )) //passing props (monster object) to the component Card.
    }
  </div>
);
