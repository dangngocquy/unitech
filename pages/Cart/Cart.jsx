import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import ItemCard from "./ItemCard";
import { Shop } from '../../assets/images';
import { AiOutlineLock } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { BiCartAdd } from 'react-icons/bi';
import ButtonMain from '../../components/designLayouts/ButtonMain';
import Notification from "../../components/designLayouts/Notification";

const Cart = () => {
  const [selected, setSelected] = useState({
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
  });
  
  const handleCheckboxChange = (event) => {
    const selectedCheckbox = event.target.name;
    const isChecked = event.target.checked;
  
    setSelected({
      ...selected,
      [selectedCheckbox]: isChecked,
    });
  
    if (isChecked) {
      switch (selectedCheckbox) {
        case "checkbox1":
          setSelected({
            checkbox1: true,
            checkbox2: false,
            checkbox3: false,
          });
          break;
        case "checkbox2":
          setSelected({
            checkbox1: false,
            checkbox2: true,
            checkbox3: false,
          });
          break;
        case "checkbox3":
          setSelected({
            checkbox1: false,
            checkbox2: false,
            checkbox3: true,
          });
          break;
        default:
          break;
      }
    }
  };

  //tính toán giá
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [tongTien, setTongTien] = useState(0);
  const [phiGiaoHang, setPhiGiaoHang] = useState(0);
  const [notify, setNotify] = useState("");


  useEffect(() => {
    let giaTien = products.reduce((acc, sanPham) => acc + parseInt(sanPham.pricePlus.replace(/\./g, '')) * parseInt(sanPham.quantity), 0);
    setTongTien(giaTien);
  }, [products]);

  useEffect(() => {
    if (tongTien <= 1000000) {
      setPhiGiaoHang(30000);
    } else if (tongTien <= 2000000) {
      setPhiGiaoHang(25000);
    } else {
      setPhiGiaoHang(0);
    }
  }, [tongTien]);

  const formattedTongTien = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tongTien);
  const formattedPhiGiaoHang = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(phiGiaoHang);
  const total = tongTien + phiGiaoHang;

  //Mã giảm giá
  const datacode = [
    { id: 1, code: "UNITECH", discount: 50000 },
    { id: 2, code: "KHUYENMAI", discount: 100000 },
    { id: 3, code: "THANDEAL", discount: 200000 }
  ];

  const [discountCode, setDiscountCode] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState(total);
  const [message, setMessage] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const applyDiscountCode = () => {
    if (!discountCode) {
      setMessage(<Notification type="warning" content="Vui lòng nhập mã giảm giá" />);
      setDiscountedTotal(0);
      setIsDiscountApplied(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    
    const foundCode = datacode.find(itemcode => itemcode.code === discountCode);
    if (foundCode) {
      setMessage(<Notification type="success" content="Áp dụng mã giảm giá thành công"/>);
      setDiscountedTotal(foundCode.discount);
      setIsDiscountApplied(true);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      setMessage(<Notification type="error" content="Mã khuyến mãi không tồn tại"/>);
      setDiscountedTotal(0);
      setIsDiscountApplied(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const cancelDiscount = () => {
    setMessage("");
    setDiscountedTotal(0);
    setIsDiscountApplied(false);
  };
  const totalAfterDiscount = total - discountedTotal;
  const Sum = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalAfterDiscount);

  //thông báo khi xóa tất cả thành công
  const handleResetCart = () => {
    dispatch(resetCart());
    setNotify(<Notification type="success" content="Đã xóa tất cả sản phẩm khỏi giỏ hàng"/>);
  
    setTimeout(() => {
      setNotify("");
    }, 3000);
  };

  const productsInCart = useSelector((state) => state.orebiReducer.products);

  return (
    <div className="mobile-Cart-containers">
      <Breadcrumbs title="Trang chủ" prevLocation="Giỏ hàng" />
      <title>Unitech - Giỏ hàng</title>
      {products.length > 0 ? (
        <div className="unitech-container-cart">
          <div className="cart-margin">
            <h1>Thông tin khách hàng</h1>
            <div className="profile-Cart">
              <div className="unitech-container-cart-box">
                <div className="flexCart">
                  <div className="Cart-contact">
                    <p>Họ tên</p>
                    <input type="text" placeholder="Họ và tên (Bắt buộc)" />
                  </div>
                  <div className="Cart-contact">
                    <p>Số điện thoại</p>
                    <input type="number" placeholder="Số điện thoại (Bắt buộc)" />
                  </div>
                  <div className="Cart-contact">
                    <p>Email</p>
                    <input type="email" placeholder="Nhập địa chỉ email" />
                  </div>
                  <div className="Cart-contact">
                    <p>Địa chỉ</p>
                    <input type="text" placeholder="Địa chỉ nhận hàng" />
                  </div>
                </div>
                <div className="Cart-textarea">
                  <p>Ghi chú</p>
                  <textarea placeholder="Nhập ghi chú..."></textarea>
                </div>
                <div>
                </div>
              </div>
            </div>
            <h1 className="margin-h1-cart">Phương thức thanh toán</h1>
            <div className="unitech-container-cart-box flexbox2">
              <div className="unitech-checkbox">
                <label className="Label-container">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    checked={selected.checkbox1}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                  <p>Tiền mặt</p>
                </label>
                <label className="Label-container">
                  <input
                    type="checkbox"
                    name="checkbox2"
                    checked={selected.checkbox2}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                  <p>Thanh toán qua thẻ tín dụng</p>
                </label>
                <label className="Label-container">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    checked={selected.checkbox3}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                  <p>Thanh toán trả góp</p>
                </label>
              </div>
              <div>
                {selected.checkbox1 &&
                  <div>
                    <div className="unitech-container-cart-button">Tính năng thanh toán tiền mặt đang cập nhật</div>
                  </div>
                }
                {selected.checkbox2 && <div className="unitech-container-cart-button">Tính năng thanh toán thẻ đang cập nhật</div>}
                {selected.checkbox3 && <div className="unitech-container-cart-button">Tính năng thanh toán trả góp đang cập nhật</div>}
              </div>
            </div>
          </div>
          <div className="Cart-reponsive">
            <div>
              <h1>Sản phẩm đã chọn</h1>
            </div>
            <div className="unitech-container-cart-box">
              <div className="Cart-with">
                <div className="unitech-btn-payment2">
                  <button className="unitech-container-cart-button1" onClick={handleResetCart}><BsTrash size={20} />Xóa tất cả</button>
                  <Link to="/shop"><button className="unitech-container-cart-button1"><BiCartAdd size={20} />Chọn thêm sản phẩm khác</button></Link>
                </div>
                <div className="Cart-scroll">
                  {productsInCart.map((item) => <ItemCard key={item.id} item={item} />)}
                </div>
                <div className="line">
                  <div className="Cart-Sum">
                    <h4>Tạm tính</h4>
                    <h4>{formattedTongTien}</h4>
                  </div>
                  <div className="Cart-Sum">
                    <h4>Phí ship</h4>
                    <h4>{formattedPhiGiaoHang}</h4>
                  </div>
                  <div className="Cart-Sum">
                    <h4>Giảm giá</h4>
                    <h4>{discountedTotal >= total ? discountedTotal.toLocaleString() : '-' + Math.abs(discountedTotal).toLocaleString()} ₫</h4>
                  </div>
                </div>
                <div className="ItemCard-border-botoom"></div>
                <div className="Cart-Sum">
                  <h3>Tổng(VND)</h3>
                  <h1>{Sum}</h1>
                </div>
                <div className="Cart-contact-sale">
                  <input type="text" placeholder="Nhập mã giảm giá" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
                  {isDiscountApplied ? (
                    <button onClick={cancelDiscount}>Hủy khuyến mãi</button>
                  ) : (
                    <button onClick={applyDiscountCode}>Áp dụng</button>
                  )}
                </div>
                <div className="unitech-btn-payment">
                  <Link to="/thanh-toan/" className="unitech-container-cart-button"><AiOutlineLock size={23} />Tiến hành đặt hàng</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="Cart-Shop">
            <img src={Shop} alt="Shop" />
            <div className="Cart-Shop-2">
              <h1>Giỏ hàng trống!</h1>
              <Link to="/shop">
                <ButtonMain title={<p style={{ padding: '10px 20px' }}>Tiếp tục mua sắm</p>} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      <span>{message}</span>
      {notify && <span>{notify}</span>}
    </div>
  );
};

export default Cart;
