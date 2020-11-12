import axios from "axios";
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  
} from "./type";
import { URL } from "./baseurl";

import * as types from "./type";

export function login(el) {
  return (dispatch) =>
    axios
      .post(URL + "handmade/auth/login", el, { withCredentials: true })
      .then((res) => {
        dispatch(getUser(), console.log(res.data));
      })
      .catch((err) => alert("Créez un compte"));
}

export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(URL + "handmade/auth/profil", {
      withCredentials: true,
    });
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export function logout() {
  return () =>
    axios
      .post(URL + "handmade/auth/logout", {}, { withCredentials: true })
      .then((rep) => {
        console.log(rep.data);
        if (rep.data === "token deleted") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
}

export const editListprofile = (paload) => {
  return {
    type: types.edit_Profile,
    paload,
  };
};

export const editProfile = (el) => {
  return (dispatch) => {
  console.log(el)
      axios
        .patch(URL + `handmade/auth/editprofile/${el._id}`, el, {
          withCredentials: true,
        })
        .then((res) =>
          dispatch(editListprofile(res.data), window.location.reload())
        )
        .catch((err) => console.log(err));
    
  };
};