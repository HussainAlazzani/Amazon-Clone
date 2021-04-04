import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
    
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
             <CurrencyFormat
                renderText = {value => {
                    return (
                        <>
                            <p>
                                Subtotal ({basket?.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                This order contains a gift
                            </small>
                        </>
                    );
                }}
                decimalScale = {2}          // decimal places
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
             />
             <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;