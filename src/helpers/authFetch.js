import axios from 'axios';


export const loginForm = async (email, password) => {
    const url = 'https://fullstack-project13.herokuapp.com/api/auth/login';
    const body = {email, password}
    const { data } = await axios.post(url, body);
    return data;
};

export const registerForm = async (nombre, email, password) => {
    const url = 'https://fullstack-project13.herokuapp.com/api/auth/register';
    const body = {nombre, email, password};
    const { data } = await axios.post(url, body);
    return data;
};

export const getUserAuthen = async () => {
    const url = 'https://fullstack-project13.herokuapp.com/api/auth/validate-token';
    const token = localStorage.getItem('token') || '';
    const { data } = await axios.get(url, {headers: {
        'x-token': token
    }});
    return data;
}












