import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, data }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img
          src={import.meta.env.VITE_DEV_URL + data?.img[0]?.url}
          alt="product-image"
        />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">{`RS:${data?.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
