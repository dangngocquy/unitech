import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../pageProps/Breadcrumbs";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';
import { NoSearch } from '../../../assets/images';
import Notification from "../../designLayouts/Notification";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/orebiSlice";
import SaleBox from "../../designLayouts/SaleBox";
import data from "../../../server/data.json";
import Gift from "../../designLayouts/Gift";

function SearchResultsHeader() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const searchText = queryParams.get("q");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    let newSearchData = data.database.filter((item) =>
      item.productName.toLowerCase().includes(searchText.toLowerCase() ?? "")
    );
    // Lọc theo mức giá
    if (priceRange === "low-price") {
      newSearchData = newSearchData.sort((item1, item2) => item1.price - item2.price);
    } else if (priceRange === "high-price") {
      newSearchData = newSearchData.sort((item1, item2) => item2.price - item1.price);
    }
    setSearchData(newSearchData);
  }, [searchText, priceRange]);


  // Tạo mảng search data cho trang hiện tại
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const searchDataPerPage = searchData.slice(indexOfFirstItem, indexOfLastItem);

  const handleLowPriceClick = () => {
    setPriceRange("low-price");
  }

  const handleHighPriceClick = () => {
    setPriceRange("high-price");
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, Math.ceil(searchData.length / ITEMS_PER_PAGE)));
  }

  // Tính toán sale
  const searchDataPerPageRef = useRef(searchDataPerPage);

  useEffect(() => {
    searchDataPerPageRef.current = searchDataPerPage;
  }, [searchDataPerPage]);

  useEffect(() => {
    setSearchData(prevSearchData => {
      return prevSearchData.map(item => {
        const originalPrice = parseFloat(item.flash.replace(/[^\d]/g, ''));
        const salePrice = parseFloat(item.pricePlus.replace(/[^\d]/g, ''));
        const discountPercentageValue = ((originalPrice - salePrice) / originalPrice) * 100;
        const roundedDiscountPercentage = Math.abs(discountPercentageValue).toFixed(0);
        return { ...item, discountPercentage: roundedDiscountPercentage };
      });
    });
  }, [searchDataPerPageRef]);

  return (
    <div className="SearchResultsHeader_header">
      <Breadcrumbs title="Tìm kiếm" prevLocation={<div>Kết quả tìm kiếm "{searchText}"</div>} />
      <title>Unitech - Kết quả tìm kiếm "{searchText}"</title>
      <p className="p-text">Tìm thấy {searchData.length} sản phẩm cho từ khóa "{searchText}"</p>
      <h3 className="h3-text">Sắp xếp sản phẩm theo</h3>
      <div className="SearchResultsHeader_header_button-all">
        <button onClick={handleLowPriceClick} className="SearchResultsHeader_button">
          <BiTrendingDown size={18} />
          Giá thấp
        </button>
        <button onClick={handleHighPriceClick} className="SearchResultsHeader_button">
          <BiTrendingUp size={18} />
          Giá cao
        </button>
      </div>
      {searchDataPerPage.length === 0 ? (
        <div className="no-result-search-page">
          <img src={NoSearch} alt="No Search" width="150" />
          <p>Không tìm thấy kết quả nào phù hợp.</p>
        </div>
      ) : (
        <div className="FlashSale-containers">
          <div className="unitech-containers-categories">
            {searchDataPerPage.map((item) => {
              //chuyển đổi định dạng liên kết
              function createSlug(str) {
                const slug = str
                  .replace(/[^\w\s-]/g, "")
                  .trim()
                  .replace(/\s+/g, "-")
                  .toLowerCase();
                return slug;
              }

              return (
                <div className="unitech-container-box" key={item.id}>
                  <div className="Product-containers">
                    <div className="unitech-container-shop">
                      <Link to={`/products/${createSlug(item.productName)}`}>
                        <img src={item.img} alt={item.productName} />
                      </Link>
                      <SaleBox salenumber={item.discountPercentage} />
                      <p style={{ color: "#2962ff" }}>{item.type}</p>
                      <Link to={`/products/${createSlug(item.productName)}`}>
                        <p
                          style={{
                            color: "#000",
                            fontWeight: "bold",
                            marginTop: "3px",
                          }}
                          className="height-Product-unt"
                        >
                          {item.productName}
                        </p>
                      </Link>
                      <div className="unitech-box-info__box-price">
                        <p style={{ color: "red", fontWeight: "bold" }}>
                          {item.pricePlus}
                        </p>
                        <p
                          style={{
                            color: "#707070",
                            display: "inline-block",
                            fontSize: "14px",
                            fontWeight: 600,
                            position: "relative",
                            WebkitTextDecoration: "line-through",
                            textDecoration: "line-through",
                            top: "2px",
                          }}
                        >
                          {item.flash}
                        </p>
                      </div>
                    </div>
                    <div>
                      {item.gift && <Gift GiftTitle={item.giftTitle} />}
                    </div>
                    <div className="flex-price-unitech">
                      <AiOutlineHeart size={25} className="box-price-unitech" />
                      <AiOutlineShoppingCart
                        size={25}
                        className="box-price-unitech"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              id: item.id,
                              name: item.productName,
                              quantity: 1,
                              image: item.img,
                              colors: item.color,
                              flash: item.flash,
                              pricePlus: item.pricePlus,
                              sale: item.sale,
                            })
                          );
                          setShowSuccess(true);
                          setTimeout(() => setShowSuccess(false), 3000);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Thêm các nút Trước và Sau */}
          {searchData.length > ITEMS_PER_PAGE && (
            <div className="pagination">
              {currentPage > 1 && (
                <button className="button-pagination" onClick={handlePrevClick}>
                  Trước
                </button>
              )}
              {Array.from(
                { length: Math.ceil(searchData.length / ITEMS_PER_PAGE) },
                (_, index) => (
                  <button
                    key={index + 1}
                    className={`pagination-button ${index + 1 === currentPage
                        ? "button-pagination-active"
                        : "button-pagination"
                      }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                )
              )}
              {currentPage < Math.ceil(searchData.length / ITEMS_PER_PAGE) && (
                <button className="button-pagination" onClick={handleNextClick}>
                  Sau
                </button>
              )}
            </div>
          )}
        </div>
      )}
      {showSuccess && <Notification type="success" content="Thêm vào giỏ hàng thành công!" />}
    </div>
  );
}

export default SearchResultsHeader;
