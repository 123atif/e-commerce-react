import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/watch-prod-3.webp";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products..." />

        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="product image" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="description">Product desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
