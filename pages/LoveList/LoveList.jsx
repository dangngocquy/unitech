import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ButtonMain from '../../components/designLayouts/ButtonMain';

const LoveList = () => {

  return (
    <div className="Sign-in-container">
      <Breadcrumbs title="Yêu thích" prevLocation="Yêu thích" />
      <div className="Cart-Shop">
        <title>Unitech - Sản phẩm yêu thích</title>
        <div className="love">
          <h1>Tính năng đang được phát triển vui lòng quay lại sau</h1>
          <Link to="/shop">
            <ButtonMain title={<p style={{ padding: '10px 20px' }}>Tiếp tục mua sắm</p>} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoveList;
