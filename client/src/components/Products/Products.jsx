import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, headingText, products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((data, id) => {
          return <Product key={id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Products;
