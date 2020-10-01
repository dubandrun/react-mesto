import * as axios from "axios"

const ADDRESS = "https://nomoreparties.co/";
const TOKEN = "ffcebfcb-da13-4128-9a59-a7a8b53b9926";
const ID = "cohort8/";
const PATH_INFO = "users/me";
const PATH_AVATAR = "users/me/avatar"
const PATH_CARDS = "cards/";

const instance = axios.create({
  baseURL: "https://nomoreparties.co/cohort8/users/me",
  headers: {
    authorization: 'ffcebfcb-da13-4128-9a59-a7a8b53b9926'
  }
});


export const userAPI = {
  // getUserInfo() {
  //   return instance
  //     .get('users/me')
  //     .then(res => 
  //       res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  //     )
  //     .then(info => {
  //       console.log(info);
  //       return info;
  //     })
  //     .catch(error => {
  //       throw new Error(error.message)
  //     })
  // }

  getUserInfo() {
    return fetch('https://nomoreparties.co/cohort8/users/me', {
      headers: {
        authorization: 'ffcebfcb-da13-4128-9a59-a7a8b53b9926'
      }
    })
      .then(res => 
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(info => {
        console.log(info);
        return info;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }
}


userAPI.getUserInfo()