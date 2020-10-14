import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleWare from 'redux-thunk'

import profileReducer from './profile-reducer'
import cardsReducer from './cards-reducer'

// import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  profile: profileReducer,
  cards: cardsReducer,
  // form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))

window.__store__ = store

export default store