import axios from 'axios';


export const loginForm = async (email, password) => {
    const url = 'https://mi-rest-api13.herokuapp.com/api/auth/join';
    const body = {email, password}
    const { data } = await axios.post(url, body);
    return data;
};

export const registerForm = async (name, email, password) => {
    const url = 'https://mi-rest-api13.herokuapp.com/api/auth/create';
    const body = {name, email, password};
    const { data } = await axios.post(url, body);
    return data;
};

export const getUserAuthen = async () => {
    const url = 'https://mi-rest-api13.herokuapp.com/api/auth/renew';
    const token = localStorage.getItem('token') || '';
    const { data } = await axios.get(url, {headers: {
        'x-token': token
    }});
    return data;
}












