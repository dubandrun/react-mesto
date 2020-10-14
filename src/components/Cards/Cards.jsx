import React from 'react';

import Card from './Card/Card'

const Cards = (props) => {
  return (
    <>
      {props.cards.map(card => <Card key={card.id} name={card.name} link={card.link} likes={card.likes.length}/>)}
    </>
  )
}

export default Cards