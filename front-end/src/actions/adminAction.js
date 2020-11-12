import * as types from "./type";
import { URL } from "./baseurl";
import Axios from "axios";

export function getCards() {
  return (dispatch) => {
    Axios.get("http://localhost:8080/handmade/admin").then((res) => {
      dispatch(getListeCards(res.data));
    });
  };
}

export function getListeCards(paload) {
  return {
    type: types.getCards,
    paload,
  };
}





export function deleteListecard(paload) {
  return {
    type: types.deleteCard,
    paload,
  };
}

export function deleteCard(id) {
  console.log(id);
  return (dispatch) => {
    Axios.delete(URL + `handmade/admin/${id}`)
      .then((res) => {
        dispatch(deleteListecard);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
}




export const editListecard = (paload) => {
  return {
    type: types.editCard,
    paload,
  };
};

export const editCard = (el) => {
  return (dispatch) => {
    if (el) {
      Axios.patch(URL+`handmade/admin/${el.id}`, el)
        .then((res) =>
          dispatch(editListecard(res.data), window.location.reload())
        )
        .catch((err) => console.log(err));
    }
  };
};


export const addListecard = (payload) => {
  return {
    type: types.addCard,
    payload,
  };
};
export const addCard = (el) => {
  return (dispatch) =>
    Axios.post(URL + "handmade/admin", el).then((res) =>
      dispatch(addListecard(res.data), window.location.reload(false))
    );
};