import { TYPES } from '../types/types';
import { getUserAuthen, loginForm, registerForm } from '../helpers/authFetch';
import { loginLoadingTrue, loginLoadingFalse } from './authLoading';

export const loginFormData = (email, password) => {
    return async (dispatch) => {
        dispatch(loginLoadingTrue());
        try {
            const resp = await loginForm(email,password);
            if(resp.ok === true){
                const bodyLogin = {email: resp.email, name: resp.name};
                dispatch(login(bodyLogin));
                dispatch(loginLoadingFalse());
                localStorage.setItem('token', resp.token);
            }else{
                dispatch(loginLoadingFalse());
            }
        } catch (error) {
            console.log(error);
            dispatch(loginLoadingFalse());
        }
    }   
}

const login = (user) => {
    return {
        type: TYPES.authLogin,
        payload: user
    };
};


export const registerFormData = (name, email, password) => {
    return async (dispatch) => {
        dispatch(loginLoadingTrue());
        try{
            const resp = await registerForm(name, email, password);
            if(resp.ok === true){
                const body = {name: resp.name, email: resp.email};
                dispatch(register(body))
                localStorage.setItem('token', resp.token);
                dispatch(loginLoadingFalse());
            }
        }catch(err){
            dispatch(loginLoadingFalse());
        }
    }
};

const register = (user) => {
    return {
        type: TYPES.authRegister,
        payload: user
    }
};


export const validarToken = () => {
    return async (dispatch) => {
        const resp = await getUserAuthen();
        dispatch(login({
            name: resp.name,
            email: resp.email
        }));
        dispatch(register({
            name: resp.name,
            email: resp.email
        }))
    }
};


const logout = () => {
    return {
        type: TYPES.authLogout,
        payload: false
    }
};

export const authLogoutAccount = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout())
    }
}



