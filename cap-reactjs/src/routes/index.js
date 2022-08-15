import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../components/pages/home'
import Product from '../components/pages/products'
import Auth from '../components/pages/auth'
import Cart from '../components/pages/cart'
import Details from '../components/pages/details'

const Index = () =>{
    return(
        <>
        <BrowserRouter>
            <Routes>
            <Route exact path = "/" element={<Home />} />
            <Route exact path = "/products" element={<Product />} />
            <Route exact path = "/products/:productId" element={<Details />} />
            <Route exact path = "/auth" element={<Auth />} />
            <Route exact path = "/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Index