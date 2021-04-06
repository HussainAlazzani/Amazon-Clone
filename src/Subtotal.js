import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {

    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => {
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
                decimalScale={2}          // decimal places
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />

            {/* Instead of wrapping the button with a link that would change the styling of */}
            {/* the button, we can use history to direct the user to a specific page */}
            <button onClick={e => history.push("/payment")}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;