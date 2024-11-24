import "./SingleProduct.scss";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import product_details_image from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product_details_image} alt="product_details_image" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">Price</span>
            <span className="desc">Product Description</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icon">
                  <FaFacebook size={18} />
                  <FaInstagram size={18} />
                  <FaLinkedin size={18} />
                  <FaPinterest size={18} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
