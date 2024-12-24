import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";
const Search = ({ setShowSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${searchQuery}`
  );
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  if (!searchQuery.length) {
    data = null;
  }
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        {data?.data?.length === 0 ? (
          "No products found"
        ) : (
          <div className="search-results">
            {data?.data?.map((items, id) => (
              <div
                className="search-result-item"
                key={id}
                onClick={() => {
                  navigate(`product/${items.id}`);
                  setShowSearch(false);
                  toast.info("Product details");
                }}
              >
                <div className="img-container">
                  <img
                    src={import.meta.env.VITE_DEV_URL + items?.img[0]?.url}
                    alt="product image"
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{items.title}</span>
                  <span className="description">{items.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
