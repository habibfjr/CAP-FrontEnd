import React from 'react';
import Header from '../../header'
import Footer from '../../footer'
import Card from '../../card'

const Index = () => {
    return (
        <>
            <Header />
            <div className="container">
                <br /><h1>All Products</h1><br />
            </div>
            <div className="container-card">
                <Card />
                
            </div>
            <div style={{height: '100px'}} />
            <Footer />
        </>
    )
}

export default Index