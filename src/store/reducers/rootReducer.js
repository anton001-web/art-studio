import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {infoReducer} from "./infoReducer";
import {serviceReducer} from "./serviceReducer";
import {letterReducer} from "./letterReducer";
import {reviewReducer} from "./reviewReducer";


export const rootReducer = combineReducers({
    burger: burgerReducer,
    info: infoReducer,
    service: serviceReducer,
    letter: letterReducer,
    review: reviewReducer
})