import React from 'react';
import { connect } from 'react-redux';

import Cards from './Cards';
import Preloader from '../common/Preloader/Preloader'

import { getCardsThunkCreator } from '../../redux/cards-reducer'

import classNames from 'classnames'
import classes from './Cards.module.css'

class CardsContainer extends React.Component {

  updateCards() {
    this.props.getCardsThunkCreator()
  }

  componentDidMount() {
    this.updateCards()

  }
  
  render () { 
    return (
      <div className={classNames(classes.placesList, classes.rootSection)}>
        {this.props.isLoading && <Preloader />}
        <Cards 
          {...this.props}
          cards={this.props.cards}
        /> 
      </div>
    ) 
  } 

}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  }
}

export default connect(mapStateToProps, {getCardsThunkCreator})(CardsContainer)