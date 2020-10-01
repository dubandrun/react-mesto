import { userAPI } from "../api/api"

const SET_USER_INFO = 'SET-USER-INFO'

const initialState = {
  name: null,
  job: null,
  avatar: null
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {

    case SET_USER_INFO: {
      return {
        ...state,
        ...action.userInfo
      }
    }

    default: {
      return state
    }
  }
}

export const setUserInfoActionCreator = (name, job, avatar) => ({
  type: SET_USER_INFO,
  userInfo: {name, job, avatar}
})

export const getUserInfoThunkCreator = () => async (dispatch) => {
  const res = await userAPI.getUserInfo()
  const {name, job, avatar} = res
  dispatch(getUserInfoThunkCreator(name, job, avatar))
}

export default profileReducer