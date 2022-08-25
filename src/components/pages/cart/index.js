import React from "react";
import "./cart.css";
import Header from "../../header";
import Footer from "../../footer";
import { InputNumber } from "antd";
import {useDispatch, useSelector} from 'react-redux';
import { CHANGE_QTY, REMOVE_ALL, REMOVE_ITEM } from "../../../config/redux/product-cart/action";
import { images } from "../../../assets";

const Index = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.productOrder)
    const subTotal = data.reduce((total, item) => total + item.price * item.quantity, 0)
    console.log(subTotal)

    const totalItems = data.reduce((total, item) => total + item.quantity, 0)
    console.log(totalItems)

    return (
        <>
            <Header />
            <div style={{height: '140px'}} />
            <div className="cart-body">
                <div className="cart-container">
                    <div className="cart-header">
                        <h3 className="cart-title">Shopping Cart</h3>
                        <h5 className="action"
                        onClick={()=> dispatch({type: REMOVE_ALL, value: data})
                    }>Remove all</h5>
                    </div>
                    
                    {data.map((item, id) => (
                    <>

                    <div className="Cart-Items" key={id}>
                        <div className="image-box">
                            <img
                                src={images[item.thumbnail]}
                                style={{ height: "120px" }}
                                alt=""
                            />
                        </div>
                        <div className="about">
                            <h1 className="title">{item.name}</h1>
                        </div>
                        <div className="counter">
                            <InputNumber
                            min={1} 
                            defaultValue={item.quantity} 
                            onChange={(val)=>
                            dispatch({
                                type: CHANGE_QTY,
                                value: val,
                                id: item.id
                            })}
                            style={{width: '60px'}}/>
                        </div>
                        <div className="prices">
                            <div className="amount">${Math.round((item.price * item.quantity)*10)/10}
                            </div>
                            <div className="remove"
                            onClick={()=> dispatch({type: REMOVE_ITEM, value: item})
                            }
                            >Remove</div>
                        </div>
                        
                    </div>
                        
                    </>
                    ) )}
                    <hr />
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">{totalItems} Items</div>
                            </div>
                            <div className="total-amount">${Math.round(subTotal *10)/10}</div>
                        </div>
                        <br/>
                        <button className="button" id="checkout">Checkout</button>
                    </div>
                    
                    {/* <div className="Cart-Items">
                        <div className="image-box">
                            <img
                                src="https://1.bp.blogspot.com/-c-uA_V7Uj68/X7dh5INmvdI/AAAAAAAAR78/OGCZoV72Z00W7qd3uR5pVys48MYqAeHngCLcBGAsYHQ/s1600/MIcrosoft%2BSurface%2BPro%2B7.jpg"
                                style={{ height: "120px" }}
                                alt=""
                            />
                        </div>
                        <div className="about">
                            <h1 className="title">Lorem ipsum</h1>
                            
                            <h3 className="subtitle">2022</h3>
                        </div>
                        <div className="counter">
                            <InputNumber min={1} defaultValue={1} 
                            style={{width: '60px'}}
                            />
                        </div>
                        <div className="prices">
                            <div className="amount">$29.99</div>
                            <div className="save">Save for later</div>
                            <div className="remove">Remove</div>
                        </div>
                    </div>

                    <hr id='cart-divider'/>
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">2 items</div>
                            </div>
                            <div className="total-amount">$59.98</div>
                        </div>
                        <button className="button" id="checkout">Checkout</button>
                    </div> */}
                    
                </div>
            </div>
            <div style={{height: '240px'}} />
            <Footer />
        </>
    );
};

export default Index;
