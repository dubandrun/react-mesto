import { userAPI } from "../api/api"

const SET_USER_INFO = 'SET-USER-INFO'

const initialState = {
  userInfo: {}
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {

    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.userInfo
      }
    }

    default: {
      return state
    }
  }
}

export const setUserInfoActionCreator = (userInfo) => ({
  type: SET_USER_INFO, 
  userInfo
})

export const getUserInfoThunkCreator = () => async (dispatch) => {
  const res = await userAPI.getUserInfo()
  // const {name, about, avatar} = res.data
  dispatch(setUserInfoActionCreator(res.data))
}

export default profileReducer

