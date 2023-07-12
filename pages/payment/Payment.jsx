import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div>
      <Breadcrumbs title="Thanh toán" />
      <div className="Cart-Shop">
        <title>Unitech - Thanh toán</title>
        <div className="love">
          <h1>Tính năng đang được phát triển vui lòng quay lại sau</h1>
          <Link to="/shop">
            <button className="unitech-container-cart-button" style={{ padding: '10px 20px' }}>Tiếp tục mua sắm</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;