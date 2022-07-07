import {TOGGLE_BURGER} from "../types";

const initialState = {
    visible: false
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BURGER:
            return {...state, visible: !state.visible}
        default: return state
    }
}