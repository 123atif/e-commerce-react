import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/watch-prod-3.webp";
import { useContext } from "react";
import { Context } from "../../../utils/Context";
import { toast } from "react-toastify";
const CartItem = () => {
  const { cartItems, handleCartProductQuanity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item, id) => (
        <div className="cart-product" key={id}>
          <div className="img-container">
            <img
              src={import.meta.env.VITE_DEV_URL + item?.img[0]?.url}
              alt="Product"
            />
          </div>
          <div className="prod-details">
            <span className="name">{item?.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => {
                handleRemoveFromCart(item);
                toast.error("Product removed from cart");
              }}
            />
            <div className="quantity-buttons">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3 </span>
              <span>x </span>
              <span className="price">RS: {item?.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
