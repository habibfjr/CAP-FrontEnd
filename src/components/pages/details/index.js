import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./details.css";
import Header from "../../header";
import Footer from "../../footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import { Button, Image, message } from "antd";
import { useProductDetail } from "../../../hooks/useProducts";
import { images } from "../../../assets";

const Index = () => {
    const {productId} = useParams();
    const [isLoading, data, getDetail] = useProductDetail();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleCart = () => {
        if (!user) {
            setTimeout(()=>{
                message.error('You need to login first', 5)
            }, 100)
            navigate("/auth");
        } else {
            navigate("/cart");
        }
    };

    useEffect(()=>{
        if (data.length < 1) {
            getDetail(productId)
        }
    }, [])

    return isLoading ? (
        <div style={{ height: '100vh', textAlign: 'center', margin: '144px auto' }}>
            <img src={images['loading.gif']} alt='' /><br/>
            Loading Product...
        </div>
    ) : (
        <>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="product-card">
                        <h1>{data.name}</h1>
                        {/* <h4>Short Description</h4>  */}
                        <br />
                        <Image src={images[data.thumbnail]}
                        // "https://1.bp.blogspot.com/-c-uA_V7Uj68/X7dh5INmvdI/AAAAAAAAR78/OGCZoV72Z00W7qd3uR5pVys48MYqAeHngCLcBGAsYHQ/s1600/MIcrosoft%2BSurface%2BPro%2B7.jpg"
                        style={{width: "100%", height: '250px', marginBottom: '30px'}}
                        />
                        <br />
                        <div className="product-info">
                            <div className="product-price">${data.price}</div>
                            <Button
                                className="product-button"
                                onClick={handleCart}
                                style={{ cursor: "pointer"}}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>

                    <div className="product-details">
                        <h1>{data.name}</h1> <br />
                        <ul style={{textAlign: 'justify'}}>
                            <li><h4>Condition:</h4> {data.condition}</li> <br />

                            <li><h4>Weight:</h4>{data.weight}g</li> <br />

                            <li><h4>Dimensions:</h4> {data.dimensions} x {data.dimensions} x {data.dimensions} mm</li> <br />

                            <li><h4>Description:</h4>
                            {data.description}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{height: '240px'}} />
            <Footer />
        </>
    );
};

export default Index;
