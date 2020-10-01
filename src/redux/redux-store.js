import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleWare from 'redux-thunk'

import profileReducer from './profile-reducer'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  profile: profileReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store