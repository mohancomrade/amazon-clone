import React from "react";
import "./CheckOut.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="sub-total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="basket-item">
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>₹{value}</strong>
            </p>
            <small className="subtotal-gift basket-item">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
