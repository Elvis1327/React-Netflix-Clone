import React from 'react'
import { Navbar } from '../shared/Navbar';
import { Link } from 'react-router-dom';
import { Footer } from '../shared/Footer';

export const Login = () => {
    return (
        <div>
        <div className="main-container-login">
            <div 
                className="img-background-login">
                <Navbar />
                <div className="_login-form">
                    <div>
                        <h1>Sign In</h1>
                    </div>
                    <form>
                        <div className="inputs">
                            <input 
                                type="text" 
                                className="input"
                                placeholder="Introduce your Email"
                            />
                        </div>
                        <div className="inputs">
                            <input 
                                type="text" 
                                className="input"
                                placeholder="Introduce your Password"
                            />
                        </div>
                        <button
                            className="_login-boton-form"
                            type="submit"
                            >
                            Sign In
                        </button>
                    </form>
                    <h2 className="_h2-login-from">New to <strong>Elvis Movies</strong>? <Link to="/register" className="_links">Register</Link></h2>
                </div>
            </div>
        </div>
            <div className="_shared-divisor"></div>
        <Footer />
        </div>
    )
}
