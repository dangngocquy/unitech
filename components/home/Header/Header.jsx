import { useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo, LogoMobile } from "../../../assets/images";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import data from '.././../../server/data.json';
import { SearchResults } from "./SearchResults";

function Header({ isScrolled }) {
  const products = useSelector((state) => state.orebiReducer.products);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchFormRef = useRef(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);

    const filtered = data.database.filter((item) =>
      item.productName.toLowerCase().includes(searchValue?.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowSearchBar(true);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setShowOverlay(false);
    if (searchValue.trim() !== "") {
      navigate(`/search?q=${searchValue}`);
      setSearchHistory((prevHistory) => [{ productName: searchValue }, ...prevHistory]); // thêm kết quả tìm kiếm vào mảng state
    }
  };

  const handleSearchBarFocus = () => {
    setShowOverlay(true);
  };

  const handleClickOutsideSearchBar = (event) => {
    if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
      setShowSearchBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSearchBar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearchBar);
    };
  }, []);


  const handleSignIn = () => {
    navigate('/sign-in');
  };


  return (
    <div className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="unitech-border-header">
        <header className="unitech-container">
          <nav className="unitech-navbar">
            <Link to="/" className="unitech-logo-pc">
              <img src={Logo} alt="Logo" width="230" height="28" />
            </Link>
            <Link to="/" className="unitech-logo-mobile">
              <img src={LogoMobile} alt="Logo" width="50" height="50" />
            </Link>

            <div className="unitech-navbar__search" ref={overlayRef}>
              <form className="Search" onSubmit={handleSearchFormSubmit}>
                <input type="text" placeholder="Bạn muốn tìm gì nè?" onChange={handleSearchChange} onFocus={handleSearchBarFocus} value={searchValue} />
                <button type="submit" className="NumberPhone">
                  <AiOutlineSearch size={23} />
                </button>
              </form>
              {showOverlay && (
                <div className="unt-overlay-css" onClick={() => setShowOverlay(false)}></div>
              )}
              {showSearchBar && <SearchResults searchQuery={searchValue} filteredProducts={filteredProducts} setShowSearchBar={setShowSearchBar} navigate={navigate} searchHistory={searchHistory} setSearchHistory={setSearchHistory} />}
            </div>

            <div className="unitech-header-nav">
              <Link to="/contact" className="NumberPhone NumberPhone-mobile" state={{ datas: location.pathname.split("/")[1] }}>
                <BsTelephone className="BsTelephone" />
                <span>
                  <p>Hotline</p>
                  <p>0368869899</p>
                </span>
              </Link>

              <SlUser size={23} className="NumberPhone hidden-seponsive-mobie-button-header" onClick={handleSignIn} />

              <Link to="/love" state={{ datas: location.pathname.split("/")[1] }} className="hidden-seponsive-mobie-button-header">
                <div className="icon-container">
                  <AiOutlineHeart size={23} className="NumberPhone" />
                  <div className="icon-container-top">0</div>
                </div>
              </Link>
              <Link
                to="/add-to-cart"
                state={{ datas: location.pathname.split("/")[1] }}
              >
                <div className="icon-container">
                  <AiOutlineShoppingCart size={23} className="NumberPhone" />
                  <div className="icon-container-top">
                    {products.length > 0 ? products.length : 0}
                  </div>
                </div>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}


export default Header;
