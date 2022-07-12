import {TOGGLE_LETTER} from "../types";

const initialState = {
    visible: false
}

export const letterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LETTER:
            return {...state, visible: !state.visible}
        default: return state
    }
}