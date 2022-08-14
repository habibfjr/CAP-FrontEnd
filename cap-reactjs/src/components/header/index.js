import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <header>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <b style={{color:"#146356"}}>Cele Shop</b>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/auth">Sign In</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <li><i className="fa-solid fa-bars" id="menu"></i></li>
    </header>
    )
}

export default Index