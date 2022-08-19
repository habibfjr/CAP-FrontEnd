import React from "react";
import { useNavigate } from "react-router-dom";
import "./details.css";
import Header from "../../header";
import Footer from "../../footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";

const Index = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleCart = () => {
        if (!user) {
            navigate("/auth");
            alert("You need to login first.");
        } else {
            navigate("/cart");
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="product-card">
                        <h1>Lorem ipsum</h1>
                        <h4>Lorem ipsum, or lipsum as it is sometimes known</h4>
                        <div className="product-pic"></div>
                        <br />
                        <div className="product-info">
                            <div className="product-price">$29.99</div>
                            <div
                                className="product-button"
                                onClick={handleCart}
                                style={{ cursor: "pointer" }}
                            >
                                Add to Cart
                            </div>
                        </div>
                    </div>

                    <div className="product-details">
                        <h1>Lorem ipsum</h1>
                        <p>
                            Lorem ipsum, or lipsum as it is sometimes known
                            <br />
                            Lorem ipsum, or lipsum as it is sometimes known
                            <br /> Lorem ipsum, or lipsum as it is sometimes known
                            <br /> Lorem ipsum, or lipsum as it is sometimes known
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;
