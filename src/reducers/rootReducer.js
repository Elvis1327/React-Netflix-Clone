import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { formLoadingReducer } from './formLoadingReducer'
import { netflixReducer } from './netflixReducer';

export const reducers = combineReducers({
    auth: authReducer,
    formLoading: formLoadingReducer,
    netflixData: netflixReducer
})





