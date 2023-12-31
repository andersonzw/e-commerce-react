import Button from "../button/Button";
import "./ProductCard.scss";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductTocart = () => dispatch(addItemToCart(product));
  ;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductTocart} buttonType="inverted">
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
