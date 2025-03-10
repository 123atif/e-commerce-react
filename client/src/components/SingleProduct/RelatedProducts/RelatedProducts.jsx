import useFetch from "../../hooks/useFetch";
import Products from "../../Products/Products";
const RelatedProducts = ({ productId, categoriesId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoriesId}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <div className="related-products-container">
      <Products headingText="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;
