import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logout } from '../../config/firebase';

const Index = () => {
    const [user] = useAuthState(auth)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const signedOut = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="menu-container">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-trigger">
                <span>Menu</span>
            </button>
            <nav className={`menu ${isOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    {
                        user ?
                            <li>
                                <div
                                    onClick={signedOut}
                                    style={{
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        marginTop: '6px'
                                    }}>
                                    Sign Out
                                </div>
                            </li>
                            :
                            <li><Link to="/auth">Sign In</Link></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Index