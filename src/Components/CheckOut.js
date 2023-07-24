import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            {" "}
            <h2>Your Shopping Basket is Empty </h2>
            <p className="basket-item">
              {" "}
              you have no items in basket . To buy one or more items , click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div className="checkout-title">
            <h2>Your Shopping Basket</h2>

            {/* List out the all checkout products  */}
            {basket.map((item) => {
              console.log(item);
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout-right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
