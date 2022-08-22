import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../components/pages/home'
import Product from '../components/pages/products'
import Auth from '../components/pages/auth'
import Cart from '../components/pages/cart'
import Details from '../components/pages/details'
import Login from '../components/pages/auth/login';
import Register from '../components/pages/auth/register';

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/products/:productId" element={<Details />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index