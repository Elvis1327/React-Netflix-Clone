import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { formLoadingReducer } from './formLoadingReducer'

export const reducers = combineReducers({
    auth: authReducer,
    formLoading: formLoadingReducer
})





