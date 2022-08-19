import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <div className="card">
                <Link to="/products/:productId">
                    <img
                        src="https://1.bp.blogspot.com/-c-uA_V7Uj68/X7dh5INmvdI/AAAAAAAAR78/OGCZoV72Z00W7qd3uR5pVys48MYqAeHngCLcBGAsYHQ/s1600/MIcrosoft%2BSurface%2BPro%2B7.jpg" alt="" />
                    <div className="description">
                        <h2>Lorem ipsum</h2>
                        <p>$29.99</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Index