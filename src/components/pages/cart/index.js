import React from "react";
import "./cart.css";
import Header from "../../header";
import Footer from "../../footer";

const Index = () => {
    return (
        <>
            <Header />
            <div className="cart-body">
                <div className="cart-container">
                    <div className="cart-header">
                        <h3 className="cart-title">Shopping Cart</h3>
                        <h5 className="action">Remove all</h5>
                    </div>

                    <div className="Cart-Items">
                        <div className="image-box">
                            <img
                                src="https://1.bp.blogspot.com/-c-uA_V7Uj68/X7dh5INmvdI/AAAAAAAAR78/OGCZoV72Z00W7qd3uR5pVys48MYqAeHngCLcBGAsYHQ/s1600/MIcrosoft%2BSurface%2BPro%2B7.jpg"
                                style={{ height: "120px" }}
                                alt=""
                            />
                        </div>
                        <div className="about">
                            <h1 className="title">Lorem ipsum</h1>
                            <br />
                            <h3 className="subtitle">2022</h3>
                        </div>
                        <div className="counter">
                            <div className="btn">+</div>
                            <div className="count">1</div>
                            <div className="btn">-</div>
                        </div>
                        <div className="prices">
                            <div className="amount">$29.99</div>
                            <div className="save">Save for later</div>
                            <div className="remove">Remove</div>
                        </div>
                    </div>

                    <div className="Cart-Items">
                        <div className="image-box">
                            <img
                                src="https://1.bp.blogspot.com/-c-uA_V7Uj68/X7dh5INmvdI/AAAAAAAAR78/OGCZoV72Z00W7qd3uR5pVys48MYqAeHngCLcBGAsYHQ/s1600/MIcrosoft%2BSurface%2BPro%2B7.jpg"
                                style={{ height: "120px" }}
                                alt=""
                            />
                        </div>
                        <div className="about">
                            <h1 className="title">Lorem ipsum</h1>
                            <br />
                            <h3 className="subtitle">2022</h3>
                        </div>
                        <div className="counter">
                            <div className="btn">+</div>
                            <div className="count">1</div>
                            <div className="btn">-</div>
                        </div>
                        <div className="prices">
                            <div className="amount">$29.99</div>
                            <div className="save">Save for later</div>
                            <div className="remove">Remove</div>
                        </div>
                    </div>

                    <hr />
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">2 items</div>
                            </div>
                            <div className="total-amount">$59.98</div>
                        </div>
                        <button className="button">Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;
