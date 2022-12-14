import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets';

const Index = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="col">
                    <h1 style={{color: 'white', fontWeight: 'bold'}}><br />Find Your
                        Best Support</h1> <br />
                    <p>Better support, better result.<br />
                        Start your journey here.</p> <br />
                    <Link className="button-hero" to="/products">Browse</Link>
                </div>

                <div className="col-2">
                    <img alt="" className="img-hero" src={images['pct.png']} />
                </div>
            </div>
        </div>
    )
}

export default Index