import React, {useState} from 'react'
import { Navbar } from '../shared/Navbar';
import { Link } from 'react-router-dom';
import { Footer } from '../shared/Footer';
import { useForm } from '../../hooks/useForm';
import Validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { loginFormData } from '../../actions/authActions';

export const Login = () => {
    const dispatch = useDispatch();
    const {formLoading} = useSelector(state => state.formLoading)

    const [errors, setErrors] = useState({});

    const { formValues, handleInputChange } = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            setErrors({})
        }

        dispatch(loginFormData(email,password));
    };

    const validateForm = () => {
        
        if(!Validator.isEmail(email)){
            setErrors({msgEmail: 'El email debe de tener caracteres validos'});
            return false
        };
        if(password.length < 6){
            setErrors({msgPassword: 'El Password debe  tener 6 caracteres o mas'});
            return false;
        };

        return true;
    }


    return (
        <div>
        <div className="main-container-login">
            <div 
                className="img-background-login">
                <Navbar />
                <div className="_login-form">
                    {formLoading === true
                    ?
                    <div className="loading-form-login"></div>
                    :
                    <div>
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="inputs">
                                <input 
                                    type="text" 
                                    className="input"
                                    placeholder="Introduce your Email"
                                    name="email"
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                            </div>
                            {errors?.msgEmail && <p className="errors_form"> {errors.msgEmail} </p>}
                            <div className="inputs">
                                <input 
                                    type="text" 
                                    className="input"
                                    placeholder="Introduce your Password"
                                    name="password"
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                            </div>
                            {errors?.msgPassword && <p className="errors_form"> {errors.msgPassword} </p>}
                            <button
                                className="_login-boton-form"
                                type="submit"
                                >
                                Sign In
                            </button>
                        </form>
                        <h2 className="_h2-login-from">New to <strong>Elvis Movies</strong>? <Link to="/register" className="_links">Register</Link></h2>
                    </div>
                    }
                </div>
            </div>
        </div>
            <div className="_shared-divisor"></div>
        <Footer />
        </div>
    )
}
