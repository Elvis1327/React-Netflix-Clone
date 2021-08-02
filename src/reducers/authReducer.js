import { TYPES } from "../types/types"


const initialState = {
    check: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){

        case TYPES.authLogin:
            return {
                ...state,
                check: true,
                user: action.payload
            };
        case TYPES.authRegister:
            return {
                ...state,
                check: true,
                user: action.payload
            };
        case TYPES.authLogout:
            return {
                ...state,
                check: action.payload
            }

        default:
            return state;
    }
}




