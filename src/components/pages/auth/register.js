import React, { useState, useEffect } from 'react';
import {
    auth,
    registerWithEmailAndPassword
} from '../../../config/firebase'
import Header from '../../header'
import Footer from '../../footer'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons';

const Register = () => {
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()

    const [inputRegister, setInputRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e, params) => {
        e.preventDefault()
        if (params === 'register') {
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

    return (
        <>
            <Header />
            <Form name='register'
            className='form-register'
            style={{margin: '0 auto'}}>
                <Form.Item name='name'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}>
                    <Input 
                        className="placeholder"
                        prefix={<UserAddOutlined className="site-form-item-icon" />}
                        type="text"
                        placeholder="e.g Saul Goodman"
                        value={inputRegister.name}
                        onChange={(e) => setInputRegister({ ...inputRegister, name: e.target.value })}
                    />
                </Form.Item>
                
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
                        placeholder="e.g attorney@law.com"
                        value={inputRegister.email}
                        onChange={(e) => setInputRegister({ ...inputRegister, email: e.target.value })}
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
                        placeholder="Input Password"
                        value={inputRegister.password}
                        onChange={(e) => setInputRegister({ ...inputRegister, password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="submit"
                        onClick={e => handleSubmit(e, 'register')}>
                        Register
                    </Button>
                    <br/> Have an account?
                    <Link to="/auth/login" style={{color:'cornflowerblue'}}> click here!</Link>
                </Form.Item>
            </Form>
            <Footer />
        </>
    )
}

export default Register