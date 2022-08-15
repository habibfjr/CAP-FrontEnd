import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
        const [isOpen, setIsOpen] = useState(false)

        return(
            <div className="menu-container">
                <button onClick = {() => setIsOpen(!isOpen)} className="menu-trigger">
                    <span>Menu</span>
                </button>
                <nav  className={`menu ${isOpen ? 'open' : 'closed'}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/auth">Sign In</Link></li>
                    </ul>
                </nav>
            </div>
        )
}

export default Index