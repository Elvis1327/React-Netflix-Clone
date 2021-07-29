import { TYPES } from "../types/types";


const initialState = {
    formLoading: false
}

export const formLoadingReducer = (state = initialState, action) => {
    switch(action.type){

        case TYPES.authStartLoading:
            return {
                ...state,
                formLoading: true
            };
        case TYPES.authFinishLoading:
            return {
                ...state,
                formLoading: false
            }

        default:
            return state;
    }
}





