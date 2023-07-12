import React, { useState, useEffect, useContext } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Notification from "../../designLayouts/Notification";
import { addToCart } from "../../../redux/orebiSlice";
import SaleBox from "../../designLayouts/SaleBox";
import Gift from "../../designLayouts/Gift";
import { NotificationContext } from "./NotificationContext";

const Product = (props) => {
  const [discountPercentage, setDiscountPercentage] = useState('');
  const { setNotify } = useContext(NotificationContext);

  useEffect(() => {
    const originalPrice = parseFloat(props && props.flash.replace(/[^\d]/g, ''));
    const salePrice = parseFloat(props && props.pricePlus.replace(/[^\d]/g, ''));
    const discountPercentageValue = ((originalPrice - salePrice) / originalPrice) * 100;
    const roundedDiscountPercentage = Math.abs(discountPercentageValue).toFixed(0);
    setDiscountPercentage(roundedDiscountPercentage);
  }, [props]);


  const dispatch = useDispatch();
  function slugify(str) {
    const slug = str
      .replace(/[^\w\s-]/g, '') // Loại bỏ ký tự đặc biệt, chỉ giữ lại ký tự, số, khoảng trắng và dấu gạch ngang
      .trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .toLowerCase(); // Chuyển thành chữ thường
    return slug;
  }
  //thêm vào giỏ hàng
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.productName,
        quantity: 1,
        image: props.img,
        sale: props.sale,
        brand: props.brand,
        flash: props.flash,
        pricePlus: props.pricePlus,
      })
    );

    setNotify(<Notification type="success" content="Thêm vào giỏ hàng thành công!" />);

    setTimeout(() => {
      setNotify("");
    }, 4000);
  };

  return (
    <div style={{ height: '100%' }}>
      <div className="Product-containers">
        <div className="unitech-container-shop">
          <Link to={`/products/${slugify(props.productName)}`} className="img-width-max-product-unt">
            <img src={props.img} alt={props.productName} />
          </Link>
          {props.sale && <SaleBox salenumber={discountPercentage} />}
          <p style={{ color: '#2962ff' }}>{props.type}</p>
          <Link to={`/products/${slugify(props.productName)}`}>
            <p style={{ color: '#000', fontWeight: 'bold', marginTop: '3px' }} className="height-Product-unt">{props.productName}</p>
          </Link>
          <div className="unitech-box-info__box-price">
            <p style={{ color: 'red', fontWeight: 'bold' }}>{props.pricePlus}</p>
            <p style={{ color: '#707070', display: 'inline-block', fontSize: '14px', fontWeight: 600, position: 'relative', WebkitTextDecoration: 'line-through', textDecoration: 'line-through', top: '2px' }}>{props.flash}</p>
          </div>
        </div>
        <div>
          <span>
            <div>
              <div>
                {props.gift && <Gift GiftTitle={props.giftTitle} />}
              </div>
              <div className="flex-price-unitech">
                <AiOutlineHeart size={25} className="box-price-unitech" />
                <AiOutlineShoppingCart size={25} className="box-price-unitech" onClick={handleAddToCart} />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
