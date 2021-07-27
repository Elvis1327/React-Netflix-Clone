import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from '../shared/Footer';
import { Home } from '../shared/Home';
import { Navbar } from '../shared/Navbar';

export const Register = () => {
    return (
        <>
        <div className="main-container-register">
            <div className="img-container-register">
                <Navbar />
                <div className="form-container-register">
                    <div>
                        <h1 className="_h1-register-form">Register</h1>
                    </div>
                    <form>
                        <div className="inputs-register">
                            <input 
                                type="text" 
                                className="input-register"
                                placeholder="Introduce your Email"
                                />
                        </div>
                        <div className="inputs-register">
                            <input 
                                type="text" 
                                className="input-register"
                                placeholder="Introduce your Email"
                            />
                        </div>
                        <div className="inputs-register">
                            <input 
                                type="text" 
                                className="input-register"
                                placeholder="Introduce your Password"
                                />
                        </div>
                        <button
                            className="_boton-register"
                            type="submit">
                            Sign Up
                        </button>
                    </form>
                    <h2 className="_h2-register-from">Have account on <strong>Elvis Movies</strong>? <Link to="/login" className="_links"> Login</Link></h2>
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
