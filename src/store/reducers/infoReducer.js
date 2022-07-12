import {TOGGLE_INFO_ONE, TOGGLE_INFO_TWO} from "../types";

const initialState = {
    visibleOne: false,
    visibleTwo: false,
}

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INFO_ONE:
            return {...state, visibleOne: !state.visibleOne}
        case TOGGLE_INFO_TWO:
            return {...state, visibleTwo: !state.visibleTwo}
        default: return state
    }
}