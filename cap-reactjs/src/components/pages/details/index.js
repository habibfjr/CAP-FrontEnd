import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/details.css'
import Header from '../../header'
import Footer from '../../footer'
import Drawer from '../../drawer'

const Index = () => {
    // const menu = document.querySelector("#menu");
    // const drawerElement = document.querySelector("#drawer");
    // const close = document.querySelector("#close");


    // menu.addEventListener("click", event => {
    //     drawerElement.classList.toggle("open");
    //     event.stopPropagation();
    // });

    // close.addEventListener("click", event => {
    //     drawerElement.classList.remove("open");
    //     event.stopPropagation();
    // })
    
    return (
        <>
        <Header />
        <Drawer />
        <div className="container">
            <div className="content">
                <div className="product-card">
                    <h1>Lorem ipsum</h1>
                    <h4>Lorem ipsum, or lipsum as it is sometimes known</h4>
                    <div className="product-pic"></div><br />
                    <div className="product-info">
                        <div className="product-price">$29.99</div>
                        <Link to="/cart" className="product-button">Add to Cart</Link>
                    </div>
                </div>
        
                
                    <div className="product-details">
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known
                                <br />Lorem ipsum, or lipsum as it is sometimes known
                                <br /> Lorem ipsum, or lipsum as it is sometimes known
                                <br /> Lorem ipsum, or lipsum as it is sometimes known
                            </p>
                    </div>
                
            </div>
    </div>
    <Footer />
        </>
    )
}

export default Index