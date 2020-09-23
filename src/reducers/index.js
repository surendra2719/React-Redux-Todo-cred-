
import { combineReducers } from "redux";
import listReducer from "./list_reducer";
import setInputReducer from "./setInput_Reducer"
export default combineReducers({
    items: listReducer,
    currentItem: setInputReducer
})