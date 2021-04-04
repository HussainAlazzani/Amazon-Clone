import React from "react";
import Subtotal from "./Subtotal.js";
import "./Checkout.css";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

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
                    {basket.map(item => {
                        return <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    })}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;