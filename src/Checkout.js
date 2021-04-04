import React from "react";
import Subtotal from "./Subtotal.js";
import "./Checkout.css";

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://www.seoclerk.com/pics/trade2684-1KYOoJ1416509800.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                    {/* Basket item */}
                    {/* Basket item */}
                    {/* Basket item */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;