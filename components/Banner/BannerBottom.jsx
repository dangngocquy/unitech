import React from "react";
import { Laptop, phukien, Phone, smarthome, khac } from "../../assets/images";
import { Link } from 'react-router-dom';

const BannerBottom = () => {
  return (
    <div className="unitech-body">
      <div className="unitech-container-shop-list">
        <h2>Chọn loại sản phẩm</h2>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", cursor: "pointer" }}>
          <div className="list-related-tag">
            <Link to="shop/">Xem tất cả</Link>
          </div>
        </div>
      </div>
      <div className="unitech-containers-categories1">
        <Link to="/product/laptop-pc" className="unitech-bottom-categories unitech-color-click1">
          <img src={Laptop} alt="danh mục" />
          <button>Laptop, Máy tính</button>
        </Link>
        <Link to="/product/phone-tablet/" className="unitech-bottom-categories unitech-color-click2">
          <img src={Phone} alt="danh mục" />
          <button>Điện thoại, Tablet</button>
        </Link>
        <Link to="/product/smart-home/" className="unitech-bottom-categories unitech-color-click3">
          <img src={smarthome} alt="danh mục" />
          <button>Nhà thông minh</button>
        </Link>
        <Link to="/product/accessory/" className="unitech-bottom-categories unitech-color-click4">
          <img src={phukien} alt="danh mục" />
          <button>Phụ kiện</button>
        </Link>
        <Link to="/product/other-private/" className="unitech-bottom-categories unitech-color-click5">
          <img src={khac} alt="danh mục" />
          <button>Khác</button>
        </Link>
      </div>
    </div>
  );
};

export default BannerBottom;
