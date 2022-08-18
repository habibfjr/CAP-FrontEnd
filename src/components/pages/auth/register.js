import React, { useState, useEffect } from 'react';
import {
    auth,
    registerWithEmailAndPassword
    } from '../../../config/firebase'
import Header from '../../header'
import Footer from '../../footer'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

const Register =()=>{
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()

    const [inputRegister, setInputRegister] = useState({
        name: '',
        email: '',
        password: ''
        });
    
        const handleSubmit =  async (e, params) => {
            e.preventDefault()
            if (params=== 'register'){
                await registerWithEmailAndPassword(
                    inputRegister.name,
                    inputRegister.email,
                    inputRegister.password
                    );
                alert('User created successfully');
            }   
        }
    
        useEffect(() => {
            if (loading) {
                return;
            }
            if (user) navigate('/');
            if (error) alert(error);
            }, [loading, user, error, navigate]);

    return(
        <>
        <Header />
        <div className="form-register">
                <label>
                    <span>Name</span>
                    <input
                    type="text" 
                    id="name" 
                    className="placeholder" 
                    placeholder="e.g Saul Goodman"
                    value={inputRegister.name}
                    onChange={(e)=> setInputRegister({...inputRegister, name:e.target.value})}
                    />
                </label>
                <label>
                    <span>E-mail</span>
                    <input 
                    type="email" 
                    id="newMail" 
                    className="placeholder" 
                    placeholder="e.g attorney@law.com" 
                    value={inputRegister.email}
                    onChange={(e)=> setInputRegister({...inputRegister, email:e.target.value})}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input 
                    className="placeholder" 
                    type="password" 
                    id="newPassword" 
                    placeholder="insert password..." 
                    value={inputRegister.password}
                    onChange={(e)=> setInputRegister({...inputRegister, password:e.target.value})}
                    />
                </label>
                <button 
                type="button" 
                className="submit"
                onClick={e=> handleSubmit(e,'register')}
                >Register</button>
            </div>
            <Footer />
        </>
    )
}

export default Register