import React, { useEffect, useState } from 'react';
import {
    auth,
    logInWithEmailAndPassword
}
    from '../../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../header'
import Footer from '../../footer'
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const Login = () => {
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()

    const [inputLogin, setInputLogin] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e, params) => {
        e.preventDefault()
        if (params === 'login') {
            await logInWithEmailAndPassword(inputLogin.email, inputLogin.password);
        }
    }

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            setTimeout(()=>{
                message.success('You are logged in!', 3)
            }, 100)
            navigate('/');
        } 
        if (error) alert(error);
    }, [loading, user, error, navigate]);

    return (
        <>
            <Header />
            <Form name="login" 
            className="form-login"
            style={{margin: '128px auto'}}
            >
                <Form.Item name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}>
                    <Input 
                        className="placeholder"
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="Email"
                        value={inputLogin.email}
                        onChange={(e) => setInputLogin({ ...inputLogin, email: e.target.value })}
                    />
                </Form.Item>

                <Form.Item name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}>
                    <Input
                        className="placeholder"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        value={inputLogin.password}
                        onChange={(e) => setInputLogin({ ...inputLogin, password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="submit"
                        onClick={e => handleSubmit(e, 'login')}>
                        Login
                    </Button>
                    <br/> Don't have an account? <Link to="/auth/register" style={{color:'cornflowerblue'}}>register now!</Link>
                </Form.Item>
            </Form>
            <div style={{height: '40px'}} />
            <Footer />
        </>
    )
}

export default Login