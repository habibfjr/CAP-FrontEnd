import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logout } from '../../config/firebase';
import Drawer from '../drawer'
import cart from '../../assets/img/cart.png'

const Index = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const signedOut = () => {
        logout()
        navigate('/')
    }

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <b style={{ color: "#146356" }}>Cele Shop</b>
                        </Link>
                    </div>
                    <Drawer />
                    <nav className="navheader">
                        <ul>
                            <li><Link to="/" 
                            >Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            {
                                user ?
                                    (
                                        <>
                                            <li>
                                                <Link to='/cart'>
                                                    <img src={cart} alt='' style={{ width: 30, height: 30}} />
                                                </Link>
                                            </li>
                                            <li>
                                                <div
                                                    onClick={signedOut}
                                                    style={{
                                                        fontSize: '18px',
                                                        cursor: 'pointer',
                                                        color: 'red'
                                                    }}>
                                                    Sign Out
                                                </div>
                                            </li>

                                        </>
                                    )
                                    :
                                    <li><Link to="/auth">Sign In</Link></li>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Index