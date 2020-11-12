import { combineReducers } from "redux";
import admincardReducer from "./cardadmin"
import authReducer from "./authentification"


const allReducers= combineReducers({

  cards:admincardReducer,
  auth:authReducer,
  
});



export default allReducers;