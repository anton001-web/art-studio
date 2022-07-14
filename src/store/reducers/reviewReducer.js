import {TOGGLE_REVIEW} from "../types";

const initialState = {
    visible: false
}

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_REVIEW:
            return {...state, visible: !state.visible}
        default: return state
    }
}