import { useStateValue } from "./StateProvider";
import "./Product.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Product({ id, image, price, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",

      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    // <section>
    <div className="product">
      <div className="product-info">
        <h6>{title}</h6>
        <p className="product-price">
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
      </div>

      <img src={image} alt="img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
    // </section>
  );
}

export default Product;
