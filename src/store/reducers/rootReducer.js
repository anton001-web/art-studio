import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {infoReducer} from "./infoReducer";


export const rootReducer = combineReducers({
    burger: burgerReducer,
    info: infoReducer
})