import React from 'react';

import classes from './Card.module.css'

const Card = ({name, link, likes, ...props}) => {
  return (
    <div className={classes.placeCard}>
      <div className={classes.image} style={{background: `url(${link})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <button className={classes.deleteIcon}></button>
      </div>
      <div className={classes.description}>
        <h3 className={classes.name}>{name}</h3>
        <div className={classes.like}>
          <button className={classes.likeIcon}></button>
          <p className={classes.likeCounter}>{likes}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
