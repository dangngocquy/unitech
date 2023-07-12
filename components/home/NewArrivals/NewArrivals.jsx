import React, { useState, useEffect } from "react";
import Product from "../Products/Product";
import { Link } from 'react-router-dom';
import data from '../../../server/data.json';
import ButtonMain from "../../designLayouts/ButtonMain";

const productsPerPage = 10;
const loadingText = "Chờ xíu nha...";

function NewArrivals() {
  const [visibleProducts, setVisibleProducts] = useState(productsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [visibleProducts]);

  const loadMoreProducts = () => {
    setIsLoading(true);
    const remainingProducts = data.database.length - visibleProducts;
    const productsToLoad = Math.min(remainingProducts, productsPerPage);
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + productsToLoad);
  }

  const getProductsToLoadText = () => {
    const remainingProducts = data.database.length - visibleProducts;
    const productsToLoad = Math.min(remainingProducts, productsPerPage);
    return (
      <div>
        {isLoading ? (
          loadingText
        ) : (
          <ButtonMain title={<div style={{ 'padding': '6px 15px' }}>Xem thêm {productsToLoad} sản phẩm</div>} />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="unitech-body">
        <div className="list-related-tag-unitech">
          <h2>Sản phẩm nổi bật nhất</h2>
          <div className="list-related-tag">
            <Link to="product/apple/">Apple</Link>
            <Link to="product/xiaomi/">Xiaomi</Link>
            <Link to="product/asus/">Asus</Link>
            <Link to="product/acer/">Acer</Link>
            <Link to="product/msi/">MSI</Link>
            <Link to="shop/">Xem tất cả</Link>
          </div>
        </div>
      </div>
      <div className="unitech-containers-categories">
        {data.database.slice(0, visibleProducts).map(product => (
          <div className="unitech-container-box" key={product.id}>
            <Product img={product.img} gift={product.gift} giftTitle={product.giftTitle} productName={product.productName} price={product.price} pricePlus={product.pricePlus} color={product.color} sale={product.sale} flash={product.flash} type={product.type} content={product.content} />
          </div>
        ))}
      </div>
      {data.database.length > visibleProducts &&
        <div className="load-more-button-unitech">
          <span onClick={loadMoreProducts}>{getProductsToLoadText()}</span>
        </div>
      }
    </div>
  );
}

export default NewArrivals;