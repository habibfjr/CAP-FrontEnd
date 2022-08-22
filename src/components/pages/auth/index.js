import React from 'react';
import './auth.css'
import Header from '../../header'
import Footer from '../../footer'
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="hero" id="hero-auth">
                    <div className='txt-reg'>
                        <h2>New around here?</h2>
                        <p>Create an account!<br />
                            Please click on button below to access register section</p>
                        <Link to="/auth/register">
                            <span>Register</span>
                        </Link>
                    </div>

                    <div className="txt-login">
                        <h2>Have an account?</h2>
                        <p>Click on button below to access login section!</p>
                        <Link to="/auth/login">
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index