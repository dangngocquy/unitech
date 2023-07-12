import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import data from '../../server/data.json';
import FilterDropdowns from "../../components/pageProps/shopPage/FilterDropdowns";
import Items from "../../components/pageProps/shopPage/Items";

const Shop = () => {
  const [prevLocation, setPrevLocation] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedConfig, setSelectedConfig] = useState("");

  const dropdownRef = useRef(null);
  const toggleDropdowns = (dropdown) => {
    if (dropdown === "dropdown1") {
      setIsDropdownOpen1(!isDropdownOpen1);
      setIsDropdownOpen(false);
      setIsDropdownOpen3(false);
      setIsDropdownOpen4(false);
    } else if (dropdown === "dropdown2") {
      setIsDropdownOpen(!isDropdownOpen);
      setIsDropdownOpen1(false);
      setIsDropdownOpen3(false);
      setIsDropdownOpen4(false);
    } else if (dropdown === "dropdown3") {
      setIsDropdownOpen(false);
      setIsDropdownOpen1(false);
      setIsDropdownOpen3(!isDropdownOpen3);
      setIsDropdownOpen4(false);
    } else if (dropdown === "dropdown4") {
      setIsDropdownOpen(false);
      setIsDropdownOpen1(false);
      setIsDropdownOpen3(false);
      setIsDropdownOpen4(!isDropdownOpen4);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsDropdownOpen1(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //tìm kiếm thương hiệu
  const handleBrandClick = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(""); // Nếu mục đã chọn là mục đã active, hủy chọn và không còn active
    } else {
      setSelectedBrand(brand); // Nếu mục đã chọn khác mục đã active, lưu trạng thái và active
    }
    setItemOffset(0);
  };
  //tìm kiếm theo danh mục
  const handleTypeClick = (type) => {
    if (selectedType === type) {
      setSelectedType("");
    } else {
      setSelectedType(type);
    }
    setItemOffset(0);
  };
  //Tìm kiếm theo cấu hình
  const handleConfigClick = (config) => {
    if (selectedConfig === config) {
      setSelectedConfig("");
    } else {
      setSelectedConfig(config);
    }
    setItemOffset(0);

  };

  const hasSelectedOptions = selectedBrand !== "" || selectedType !== "" || selectedConfig !== "";

  const sortedItems = [...data.database];

  if (sortOption === "low") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    sortedItems.sort((a, b) => b.price - a.price);
  }

  const items = sortedItems.filter((item) => {
    if (selectedType === "" && selectedBrand === "" && selectedConfig === "") {
      return true;
    } else if (selectedType === "" && selectedBrand === "" && selectedConfig !== "") {
      return item.config.memory === selectedConfig;
    } else if (selectedType === "" && selectedBrand !== "" && selectedConfig === "") {
      return item.brand.toLowerCase() === selectedBrand.toLowerCase();
    } else if (selectedType !== "" && selectedBrand === "" && selectedConfig === "") {
      return item.type.toLowerCase() === selectedType.toLowerCase();
    } else if (selectedType !== "" && selectedBrand !== "" && selectedConfig === "") {
      return (
        item.type.toLowerCase() === selectedType.toLowerCase() &&
        item.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    } else if (selectedType !== "" && selectedBrand === "" && selectedConfig !== "") {
      return (
        item.type.toLowerCase() === selectedType.toLowerCase() &&
        item.config.memory === selectedConfig
      );
    } else if (selectedType === "" && selectedBrand !== "" && selectedConfig !== "") {
      return (
        item.brand.toLowerCase() === selectedBrand.toLowerCase() &&
        item.config.memory === selectedConfig
      );
    } else {
      return (
        item.type.toLowerCase() === selectedType.toLowerCase() &&
        item.brand.toLowerCase() === selectedBrand.toLowerCase() &&
        item.config.memory === selectedConfig
      );
    }
  });


  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setItemOffset((pageNumber - 1) * itemsPerPage);
  };

  const activePageStyle = {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    fontWeight: 'bold',
    padding: '5px 10px',
    background: '#2962ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3px',
    float: 'right',
    fontSize: '13px',
    transition: '.3s',
    color: '#fff'
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.min(totalPages, 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Shop-unitech-containers">
      <title>Unitech - Sản phẩm</title>
      <Breadcrumbs title="Sản phẩm" prevLocation={prevLocation} />
      <div ref={dropdownRef}>
        <FilterDropdowns
          toggleDropdowns={toggleDropdowns}
          handleBrandClick={handleBrandClick}
          handleTypeClick={handleTypeClick}
          handleConfigClick={handleConfigClick}
          setSortOption={setSortOption}
          selectedBrand={selectedBrand}
          selectedType={selectedType}
          selectedConfig={selectedConfig}
          sortOption={sortOption}
          isDropdownOpen1={isDropdownOpen1}
          isDropdownOpen={isDropdownOpen}
          isDropdownOpen3={isDropdownOpen3}
          isDropdownOpen4={isDropdownOpen4}
        />
      </div>
      <ShopSideNav />
      <div className="unitech-containers-categories">
        <Items
          currentItems={items.slice(itemOffset, itemOffset + itemsPerPage)}
        />
      </div>
      {hasSelectedOptions && items.length === 0 && <div className="notication-unitech">Không có sản phẩm nào phù hợp !</div>}
      <div className="pagination">
        {itemOffset > 0 && <span onClick={() => handleClick(1)} className="button-pagination">Trước</span>}
        {itemOffset > itemsPerPage && (
          <span onClick={() => handleClick(itemOffset / itemsPerPage)} className="button-pagination">
            Sau
          </span>
        )}
        {pageNumbers.map((number) => (
          <span
            key={number}
            className={
              itemOffset / itemsPerPage === number - 1 ? "button-pagination" : "button-pagination"
            }
            style={itemOffset / itemsPerPage === number - 1 ? activePageStyle : null}
            onClick={() => handleClick(number)}
          >
            {number}
          </span>
        ))}
        {itemOffset + itemsPerPage < items.length && (
          <span onClick={() => handleClick(itemOffset / itemsPerPage + 2)} className="button-pagination">
            Sau
          </span>
        )}
        {itemOffset + itemsPerPage < items.length - itemsPerPage && (
          <span onClick={() => handleClick(totalPages)} className="button-pagination">Sau</span>
        )}
      </div>
    </div>
  );
};

export default Shop;