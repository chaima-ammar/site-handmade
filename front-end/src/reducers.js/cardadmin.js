import * as types from '../actions/type'

const list_Cards = [];

const admincardReducer = (state = list_Cards, action) => {

  if (action.type === types.getCards)
   {return action.paload } 


   else if (action.type === types.deleteCard) {
    return state.filter((el) => el.id !== action. paload); } 


   
    else if (action.type === types.editCard ) {
      return [...state, action.paload ]; }



    else if (action.type === types.addCard) {
      return [...state, action.payload]; } 





        else {
          return state;
        }
  
};

export default admincardReducer;