import {TOGGLE_SERVICE} from "../types";

const initialState = {
    visible: false,
    modalTitle: '',
    modalType: '',
    priceType: ''
}

export const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SERVICE:
            return {...state, visible: !state.visible, modalTitle: action.payload.modalTitle, modalType: action.payload.modalType, priceType: action.payload.priceType}
        default: return state
    }
}