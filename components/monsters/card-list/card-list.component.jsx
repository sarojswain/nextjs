import React from "react";
import classes from "./card-list.module.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className={classes.cardlist}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
