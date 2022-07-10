import {TOGGLE_INFO} from "../types";

const initialState = {
    visible: false
}

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INFO:
            return {...state, visible: !state.visible}
        default: return state
    }
}