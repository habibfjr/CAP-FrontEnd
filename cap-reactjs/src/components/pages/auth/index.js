import React from 'react';
import './auth.css'
import Header from '../../header'
import Footer from '../../footer'
import Drawer from '../../drawer'

const Index = () => {
    function toggleWrap() {
        document.querySelector('.wrapper').classList.toggle('s-signup')
    }

    function myFunction() {
        document.getElementById("Email").placeholder = "Required";
        document.getElementById("name").placeholder = "Required";
        document.getElementById("password").placeholder = "Required";
        document.getElementById("newMail").placeholder = "Required";
        document.getElementById("newPassword").placeholder = "Required";
    };

    return (
        <>
        <Header />
        <div className="container">
        <div className="hero">
            <div className="contain-wrap">
            <div className="wrapper">
                <div className="form-login">
                <label>
                <span>Email</span>
                    <input className="placeholder"type="email" id="Email" name="email" />
                </label>
                <label>
                    <span>Password</span>
                        <input className="placeholder" type="password" id="password" name="password" />
                </label>
                <button onClick={myFunction} className="submit" type="login">Login</button>
        
            </div>
        
            <div className="slide">
                <div className="img">
                <div className="img-text m-up">
                    <h2>New around here?</h2>
                    <p>Create an account!<br />
                        Please click on button below to access register section</p>
                </div>
                <div className="img-text m-in">
                    <h2>Have an account?</h2>
                    <p>Click on button below to access login section!</p>
                </div>
                <div className="img-btn" onClick={toggleWrap}>
                    <span className="m-up">Register</span>
                    <span className="m-in">Login</span>
                </div>
            </div>
            <div className="form-register">
                <label>
                    <span>Name</span>
                    <input type="text" id="name" className="placeholder" placeholder="e.g Saul Goodman" />
                </label>
                <label>
                    <span>E-mail</span>
                    <input type="email" id="newMail" className="placeholder" placeholder="e.g attorney@law.com" />
                </label>
                <label>
                    <span>Password</span>
                    <input className="placeholder" type="password" id="newPassword" placeholder="insert password..." />
                </label>
                <button onClick={myFunction} type="button" className="submit">Register</button>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <Footer />
        </>
    )
}

export default Index