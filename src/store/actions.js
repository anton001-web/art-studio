import {TOGGLE_BURGER, TOGGLE_INFO, TOGGLE_SERVICE} from "./types";

export const toggleBurger = () => {
    return {
        type: TOGGLE_BURGER
    }
}

export const toggleInfo = () => {
    return {
        type: TOGGLE_INFO
    }
}

export const toggleService = ({modalTitle, modalType, priceType}) => {
    return {
        type: TOGGLE_SERVICE,
        payload: {
            modalType: modalType,
            modalTitle: modalTitle,
            priceType: priceType
        }
    }
}