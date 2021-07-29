import { TYPES } from "../types/types"



export const loginLoadingTrue = () => {
    return {
        type: TYPES.authStartLoading
    }
}
export const loginLoadingFalse = () => {
    return {
        type: TYPES.authFinishLoading
    }
}


