import { userAPI } from "../api/api"

const ADD_CARDS = 'ADD-CARDS'
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'

let initialState = {
  cards: [],
  isLoading: false
}

const cardsReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_CARDS: {
      return {
        ...state,
        cards: action.data
      }
    }

    case TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.toggle
      }
    }

    default:
      return state
  }
}

// action creators
export const getCardsActionCreator = (data) => ({
  type: ADD_CARDS,
  data
})

export const setPreloaderActionCreator = (toggle) => ({
  type: TOGGLE_IS_LOADING,
  toggle
})

//thunk
export const getCardsThunkCreator = () => async (dispatch) => {
  dispatch(setPreloaderActionCreator(true))
  const res = await userAPI.getCards()
  dispatch(getCardsActionCreator(res.data.slice(0, 15)))
  dispatch(setPreloaderActionCreator(false))
}

export default cardsReducer
