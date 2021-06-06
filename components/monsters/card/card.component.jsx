import React from 'react';
import classes from './card.module.css'

export const Card = (props) => {
  console.log(props);
   return <div className={classes.cardcontainer}>
          <img src={`https://robohash.org/${props.monster.id}?set=set2&180*180`} alt="monster"/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
          </div>
}