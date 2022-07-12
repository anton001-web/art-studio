import {TOGGLE_BURGER, TOGGLE_INFO_ONE, TOGGLE_INFO_TWO, TOGGLE_SERVICE} from "./types";

export const toggleBurger = () => {
    return {
        type: TOGGLE_BURGER
    }
}

export const toggleInfoOne = () => {
    return {
        type: TOGGLE_INFO_ONE,
    }
}

export const toggleInfoTwo = () => {
    return {
        type: TOGGLE_INFO_TWO,
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