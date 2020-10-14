import * as axios from "axios"

const PATH_INFO = "users/me";
const PATH_AVATAR = "users/me/avatar"
const PATH_CARDS = "cards/";

const instance = axios.create({
  baseURL: "https://nomoreparties.co/cohort8/",
  headers: {
    authorization: 'ffcebfcb-da13-4128-9a59-a7a8b53b9926'
  }
});


export const userAPI = {
  getUserInfo() {
    return instance
      .get(PATH_INFO)
      .then(res => {
        // console.log(res);
        return res;
      })
      .catch(error => {
        throw new Error(error.message)
      })
  },

  getCards() {
    return instance
      .get(PATH_CARDS)
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message)
      })
  }
}

// userAPI.getUserInfo()
// userAPI.getCards()