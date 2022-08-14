import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
        <div id="drawer">
        <span id="close"><i className="fa-solid fa-xmark"></i></span>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/auth">Sign In</Link></li>
            </ul>
        </nav>
    </div>
        </>
    )
}

export default Index