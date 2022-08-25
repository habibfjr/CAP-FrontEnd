import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./details.css";
import Header from "../../header";
import Footer from "../../footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import { Button, Image, InputNumber, message } from "antd";
import { useProductDetail } from "../../../hooks/useProducts";
import { images } from "../../../assets";
import {useDispatch} from 'react-redux'
import { ADD_ITEM } from "../../../config/redux/product-cart/action";

const Index = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const [isLoading, dataDetail, getDetail] = useProductDetail();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [qty, setQty] = useState({
        quantity: 0
    })

    const handleCart = () => {
        if (!user) {
            setTimeout(()=>{
                message.error('You need to login first', 3)
            }, 100)
            navigate("/auth");
        } else {
            const {id, name, thumbnail, price} = dataDetail
            const {quantity} = qty
            const data = {id, name, thumbnail, price, quantity}
            if (quantity === 0){
                message.error('minimum quantity is 1', 2)
            } else {
                dispatch({
                    type: ADD_ITEM,
                    value: data
                })
                setTimeout(()=>{
                    message.success('Item added to cart', 3)
                }, 100)
                console.log(data)
            }
            // navigate("/cart");
        }
    };

    useEffect(()=>{
        if (dataDetail.length < 1) {
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
                        <h1>{dataDetail.name}</h1>
                        <br />
                        <Image src={images[dataDetail.thumbnail]}
                        style={{width: "100%", height: '250px', marginBottom: '30px'}}
                        />
                        <br />
                        <div className="product-info">
                            <div className="product-price">${dataDetail.price}</div>
                            <InputNumber
                            defaultValue={qty.quantity}
                            onChange={(val)=>
                            setQty({quantity: val})}
                            />
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
                        <h1>{dataDetail.name}</h1> <br />
                        <ul style={{textAlign: 'justify'}}>
                            <li><h4>Condition:</h4> {dataDetail.condition}</li> <br />

                            <li><h4>Weight:</h4>{dataDetail.weight}g</li> <br />

                            <li><h4>Dimensions:</h4> {dataDetail.dimensions} x {dataDetail.dimensions} x {dataDetail.dimensions} mm</li> <br />

                            <li><h4>Description:</h4>
                            {dataDetail.description}
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
