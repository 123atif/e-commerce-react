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
              <span onClick={() => handleCartProductQuanity("dec", item)}>
                -
              </span>
              <span>{item?.quantity}</span>
              <span onClick={() => handleCartProductQuanity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item?.quantity}</span>
              <span>x </span>
              <span className="price">RS: {item?.price * item?.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
