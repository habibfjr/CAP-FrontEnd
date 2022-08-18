import React, { useEffect, useState } from 'react';
import {
    auth, 
    logInWithEmailAndPassword}
    from '../../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import Header from '../../header'
import Footer from '../../footer'

const Login =()=>{
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()
    
    const [inputLogin, setInputLogin] = useState({
        email: '',
        password: ''
    })

    const handleSubmit =  async (e, params) => {
        e.preventDefault()
        if (params=== 'login'){
            await logInWithEmailAndPassword(inputLogin.email, inputLogin.password);
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
        <form className="form-login">
                <label>
                <span>Email</span>
                    <input className="placeholder"
                    type="email"
                    id="Email"
                    name="email"
                    value={inputLogin.email}
                    onChange={(e)=> setInputLogin({...inputLogin, email:e.target.value})}
                    />
                </label>
                <label>
                    <span>Password</span>
                        <input className="placeholder" type="password" id="password" name="password" 
                        value={inputLogin.password}
                        onChange={(e)=> setInputLogin({...inputLogin, password:e.target.value})}
                        />
                </label>
                <button
                className="submit"
                type="login"
                onClick={e=> handleSubmit(e,'login')}
                >Login</button>
        
            </form>
            <Footer />
        </>
    )
}

export default Login