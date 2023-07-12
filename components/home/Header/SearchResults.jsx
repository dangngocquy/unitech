import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { BiTime } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

function SearchResults({ searchQuery, filteredProducts, setShowSearchBar, navigate, searchHistory, setSearchHistory }) {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowSearchBar]);

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  const uniqueSearchHistory = searchHistory.filter((item, index, self) =>
    index === self.findIndex((t) => t.productName === item.productName)
  );

  function slugify(str) {
    const slug = str
      .replace(/[^\w\s-]/g, '') // Loại bỏ ký tự đặc biệt, chỉ giữ lại ký tự, số, khoảng trắng và dấu gạch ngang
      .trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .toLowerCase(); // Chuyển thành chữ thường
    return slug;
  }

  return (
    <div className="Header-search-containers" ref={searchRef}>
      {searchQuery && (
        <div className={`Header-search`}>
          {uniqueSearchHistory.length > 0 && (
            <div className="search-history">
              <div className="flex-search-header-box">
                <h4>
                  <BiTime size={20} />
                  <p>Lịch sử tìm kiếm</p>
                </h4>
                <button onClick={handleClearHistory}>
                  <BsTrash size={20} />
                  <p>Xóa tất cả</p>
                </button>
              </div>
              {uniqueSearchHistory.map((item) => (
                <div key={item.productName}
                  onClick={() =>
                    navigate(`/search?q=${item.productName.toLowerCase().split(" ").join("+")}`)
                  } className="Flex-search-history">
                  <div>
                    <h4>{item.productName}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProducts && filteredProducts.length > 0 ? (
            <>
              <h4 className="text-s">Sản phẩm được đề xuất</h4>
              {filteredProducts.slice(0, 10).map((item) => (
                <Link to={`/products/${slugify(item.productName)}`} key={item.id}>
                  <div className="Flex-search">
                    <img src={item.img} alt="productImg" width="60px" />
                    <div>
                      <h4>{item.productName}</h4>
                      <div className="unitech-box-info__box-price">
                        <p style={{ color: "red", fontWeight: "bold" }}>{item.pricePlus}</p>
                        <p
                          style={{
                            color: "#707070",
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            margin: "0 0 10px 10px",
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
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <div className="no-result-unitech">
              <p>Không tìm thấy sản phẩm nào được đề xuất</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { SearchResults };
