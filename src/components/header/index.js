import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../drawer'

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
                        <Drawer />
                <nav className="navheader">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/auth">Sign In</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Index