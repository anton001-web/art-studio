import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {infoReducer} from "./infoReducer";
import {serviceReducer} from "./serviceReducer";


export const rootReducer = combineReducers({
    burger: burgerReducer,
    info: infoReducer,
    service: serviceReducer
})