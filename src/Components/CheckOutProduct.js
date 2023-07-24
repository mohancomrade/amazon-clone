import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM-BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img src={image} alt="img" className="checkout-product-image" />

      <div className="checkout-product-info">
        <p className="basket-item">{title}</p>
        <p className="checkout-product-prize">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <p className="star">
                  <StarBorderIcon />
                </p>
              </p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
