import React from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiFilterAlt, BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

const FilterDropdowns = (props) => {
    const {
        toggleDropdowns,
        handleBrandClick,
        handleTypeClick,
        handleConfigClick,
        selectedBrand,
        selectedType,
        selectedConfig,
        sortOption,
        setSortOption,
        isDropdownOpen1,
        isDropdownOpen,
        isDropdownOpen3,
        isDropdownOpen4
    } = props;

    return (
        <div className="Filter-container">
            <div className="Price-brand">
                <BiFilterAlt size={23} />
                <p>Bộ lọc</p>
            </div>
            <div className="Filter-container-flex">
                <div className="Price-container-option">
                    <div className="Price-brand" onClick={() => toggleDropdowns("dropdown1")} >
                        <p>Hãng</p>
                        <RiArrowDropDownLine size={23} />
                    </div>
                    {isDropdownOpen1 && (
                        <div className="option-unitech-price">
                            <div className={`Price-brand-border ${selectedBrand === "xiaomi" ? "actives" : ""}`} onClick={() => handleBrandClick("xiaomi")}>Xiaomi</div>
                            <div className={`Price-brand-border ${selectedBrand === "samsung" ? "actives" : ""}`} onClick={() => handleBrandClick("samsung")}>Samsung</div>
                            <div className={`Price-brand-border ${selectedBrand === "lenovo" ? "actives" : ""}`} onClick={() => handleBrandClick("lenovo")}>Lenovo</div>
                            <div className={`Price-brand-border ${selectedBrand === "apple" ? "actives" : ""}`} onClick={() => handleBrandClick("apple")}>Apple</div>
                            <div className={`Price-brand-border ${selectedBrand === "nokia" ? "actives" : ""}`} onClick={() => handleBrandClick("nokia")}>Nokia</div>
                            <div className={`Price-brand-border ${selectedBrand === "asus" ? "actives" : ""}`} onClick={() => handleBrandClick("asus")}>Asus</div>
                            <div className={`Price-brand-border ${selectedBrand === "acer" ? "actives" : ""}`} onClick={() => handleBrandClick("acer")}>Acer</div>
                            <div className={`Price-brand-border ${selectedBrand === "msi" ? "actives" : ""}`} onClick={() => handleBrandClick("msi")}>Msi</div>
                            <div className={`Price-brand-border ${selectedBrand === "vivo" ? "actives" : ""}`} onClick={() => handleBrandClick("vivo")}>Vivo</div>
                            <div className={`Price-brand-border ${selectedBrand === "tecno" ? "actives" : ""}`} onClick={() => handleBrandClick("tecno")}>Tecno</div>
                            <div className={`Price-brand-border ${selectedBrand === "realme" ? "actives" : ""}`} onClick={() => handleBrandClick("realme")}>Realme</div>
                            <div className={`Price-brand-border ${selectedBrand === "oppo" ? "actives" : ""}`} onClick={() => handleBrandClick("oppo")}>Oppo</div>
                            <div className={`Price-brand-border ${selectedBrand === "oneplus" ? "actives" : ""}`} onClick={() => handleBrandClick("oneplus")}>OnePlus</div>
                            <div className={`Price-brand-border ${selectedBrand === "khác" ? "actives" : ""}`} onClick={() => handleBrandClick("khác")}>Khác</div>
                        </div>
                    )}
                </div>
                <div className="Price-container-option">
                    <div className="Price-brand" onClick={() => toggleDropdowns("dropdown3")}>
                        <p>Loại sản phẩm</p>
                        <RiArrowDropDownLine size={23} />
                    </div>
                    {isDropdownOpen3 && (
                        <div className="option-unitech-price">
                            <div className={`Price-brand-border ${selectedType === "Laptop, Máy tính" ? "actives" : ""}`} onClick={() => handleTypeClick("Laptop, Máy tính")}>Laptop, Máy tính</div>
                            <div className={`Price-brand-border ${selectedType === "Điện thoại, Tablet" ? "actives" : ""}`} onClick={() => handleTypeClick("Điện thoại, Tablet")}>Điện thoại, Tablet</div>
                            <div className={`Price-brand-border ${selectedType === "Smart Home" ? "actives" : ""}`} onClick={() => handleTypeClick("Smart Home")}>Smart Home</div>
                            <div className={`Price-brand-border ${selectedType === "Phụ kiện" ? "actives" : ""}`} onClick={() => handleTypeClick("Phụ kiện")}>Phụ kiện</div>
                        </div>
                    )}
                </div>
                <div className="Price-container-option">
                    <div className="Price-brand" onClick={() => toggleDropdowns("dropdown2")}>
                        <p>Giá</p>
                        <RiArrowDropDownLine size={23} />
                    </div>
                    {isDropdownOpen && (
                        <div className="option-unitech-price">
                            <div
                                className={`Price-brand-border ${sortOption === "low" ? "actives" : ""}`}
                                onClick={() => setSortOption("low")}
                            >
                                <BiTrendingDown size={18} />
                                <p>Giá thấp</p>
                            </div>
                            <div
                                className={`Price-brand-border ${sortOption === "high" ? "actives" : ""}`}
                                onClick={() => setSortOption("high")}
                            >
                                <BiTrendingUp size={18} />
                                <p>Giá cao</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="Price-container-option">
                    <div className="Price-brand" onClick={() => toggleDropdowns("dropdown4")}>
                        <p>Cấu hình</p>
                        <RiArrowDropDownLine size={23} />
                    </div>
                    {isDropdownOpen4 && (
                        <div className="option-unitech-price">
                            <div className={`Price-brand-border ${selectedConfig === "256 GB" ? "actives" : ""}`} onClick={() => handleConfigClick("256 GB")}>256 GB</div>
                            <div className={`Price-brand-border ${selectedConfig === "8 GB" ? "actives" : ""}`} onClick={() => handleConfigClick("8 GB")}>8 GB</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterDropdowns;