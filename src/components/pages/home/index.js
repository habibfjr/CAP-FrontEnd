import React from 'react';
import './style.css'
import Header from '../../header'
import Footer from '../../footer'
import Hero from '../../hero'
import Card from '../../card'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />

            <div className="container-title">
                <br /><h1>Our Products:</h1><br />
            </div>

            <div className="container-card">
                <Card />
                
            </div>
            <div style={{height: '100px'}} />
            <Footer />
        </>
    )
}

export default Home