import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Footer } from '../shared/Footer';
import { Home } from '../shared/Home';
import { Navbar } from '../shared/Navbar';
import Validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { registerFormData } from '../../actions/authActions';

export const Register = () => {
    const dispatch = useDispatch();
    const { formLoading } = useSelector(state => state.formLoading);
    const [errors, setErrors] = useState({});

    const { handleInputChange, formValues } = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if(validateFormRegister()){
            setErrors({})
        };

        dispatch(registerFormData(name, email, password));

    };

    const validateFormRegister = () => {
        
        if(name.length < 5){
            setErrors({msgName: 'El name debe de tener 5 o mas caracteres'});
            return false;
        };
        if(!Validator.isEmail(email)){
            setErrors({msgEmail: 'El email debe de tener caracteres validos'});
            return false;
        };
        if(password.length < 6){
            setErrors({msgPassword: 'El Password debe  tener 6 caracteres o mas'});
            return false;
        };

        return true;
    }


    return (
        <>
        <div className="main-container-register">
            <div className="img-container-register">
                <Navbar />
                <div className="form-container-register">
                    {(formLoading === true) 
                    ?
                    <div className="loading-form-login"></div>
                    :
                    <>
                        <div>
                        <h1 className="_h1-register-form">Register</h1>
                        </div>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="inputs-register">
                                <input 
                                    type="text" 
                                    className="input-register"
                                    placeholder="Introduce your Name"
                                    onChange={handleInputChange}
                                    name="name"
                                    autoComplete="off"
                                    />
                            </div>
                            {errors?.msgName && <p className="errors_form"> {errors.msgName} </p>}
                            <div className="inputs-register">
                                <input 
                                    type="text" 
                                    className="input-register"
                                    placeholder="Introduce your Email"
                                    onChange={handleInputChange}
                                    name="email"
                                    autoComplete="off"
                                />
                            </div>
                            {errors?.msgEmail && <p className="errors_form"> {errors.msgEmail} </p>}
                            <div className="inputs-register">
                                <input 
                                    type="password" 
                                    className="input-register"
                                    placeholder="Introduce your Password"
                                    onChange={handleInputChange}
                                    name="password"
                                    autoComplete="off"
                                    />
                            </div>
                            {errors?.msgPassword && <p className="errors_form"> {errors.msgPassword} </p>}
                            <button
                                className="_boton-register"
                                type="submit">
                                Sign Up
                            </button>
                        </form>
                        <h2 className="_h2-register-from">Have account on <strong>Elvis Movies</strong>? <Link to="/login" className="_links"> Login</Link></h2>
                    </>
                    }
                </div>
            </div>
            <div className="_shared-divisor"></div>
            <div>
                {/* COMPONENTE HOME TIENE UN COMPONENTE NIETO (QUESTIONS) */}
                <Home />
            </div>
            <div className="_shared-divisor"></div>
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
}
