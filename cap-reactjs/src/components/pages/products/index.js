import React from 'react';
import { Link } from 'react-router-dom';
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
        <br /><h1>All Products</h1><br />
    </div>

    <div className="container-card">
        <div className="card">
            <img
                src="https://toppng.com/uploads/preview/iphone-icon-png-mobile-clip-art-smart-phone-11563653635uruiaxvz05.png" />
            <div className="description">
                <h2><Link to="/products/:productId">Lorem ipsum</Link></h2>
                <p>$29.99</p>
            </div>
        </div>

        <div className="card">
            <img
                src="https://w7.pngwing.com/pngs/599/150/png-transparent-iphone-x-front-view-apple%E6%89%8B%E6%9C%BA-iphone-intelligent-mobile-phone.png" />
            <div className="description">
                <h2><a href="details.html">Lorem ipsum</a></h2>
                <p>$39.99</p>
            </div>
        </div>

        <div className="card">
            <img
                src="https://1.bp.blogspot.com/-c-uA_V7Uj68/X7dh5INmvdI/AAAAAAAAR78/OGCZoV72Z00W7qd3uR5pVys48MYqAeHngCLcBGAsYHQ/s1600/MIcrosoft%2BSurface%2BPro%2B7.jpg" />
            <div className="description">
                <h2><a href="details.html">Lorem ipsum</a></h2>
                <p>$29.99</p>
            </div>
        </div>


        <div className="card">
            <img
                src="https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg" />
            <div className="description">
                <h2><a href="details.html">Lorem ipsum</a></h2>
                <p>$69.99</p>
            </div>
        </div>

        <div className="card">
            <img
                src="https://w7.pngwing.com/pngs/515/571/png-transparent-laptop-graphy-laptop-electronics-3d-computer-graphics-photography.png" />
            <div className="description">
                <h2><a href="details.html">Lorem ipsum</a></h2>
                <p>$79.99</p>
            </div>
        </div>
    </div>
    <Footer />
        </>
    )
}

export default Index