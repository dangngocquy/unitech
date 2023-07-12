import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsLaptop } from "react-icons/bs";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoIosPhonePortrait, IoIosLogOut } from 'react-icons/io';
import { TbSmartHome } from 'react-icons/tb';
import { Flashsale, Sale } from "../../../assets/images";
import { SlEarphones } from 'react-icons/sl';
import ButtonMain from '../../designLayouts/ButtonMain';
import { banerMenu } from "../../../assets/images";

const HeaderBottom = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <ul className="unitech-menu">
        <li>
          <div onClick={showSidebar}>
            <ButtonMain title={<><AiOutlineMenu size={18} /><p>DANH MỤC</p></>} />
          </div>
        </li>
        <li>
          <div className="unitech-dropdown-flex-icon">
            <img src={Flashsale} alt="flash sale" width="50" height="50" />
            <p>Khuyến mãi</p>
          </div>
        </li>
        <li>
          <div className="unitech-dropdown-flex-icon">
            <img src={Sale} alt="Logo" width="50" height="50" />
            <p>Deal hot</p>
          </div>

        </li>
        <li>
          <div className="unitech-dropdown-icon unitech-dropdown-icon-mobile">
            <IoIosPhonePortrait size={23} />
            <p>Điện thoại, Tablet</p>
            <RiArrowDropDownLine size={23} />
          </div>
          <ul className="dropdown-menu-unt">
            <h4>Hãng sản xuất</h4>
            <div className="flex-btn-menu-header-unt">
              <li><Link to="/product/apple/">Apple</Link></li>
              <li><Link to="/product/samsung/">Samsung</Link></li>
              <li><Link to="/product/xiaomi/">Xiaomi</Link></li>
              <li><Link to="/product/asus/">Asus</Link></li>
              <li><Link to="/product/tecno/">Tecno</Link></li>
              <li><Link to="/product/nokia/">Nokia</Link></li>
              <li><Link to="/product/realme/">Realme</Link></li>
              <li><Link to="/product/vivo/">Vivo</Link></li>
              <li><Link to="/product/oneplus/">Oneplus</Link></li>
            </div>
            <div>
              <img src={banerMenu} alt="Giới thiệu sản phẩm" />
            </div>
          </ul>
        </li>

        <li>
          <div className="unitech-dropdown-icon unitech-dropdown-icon-mobile">
            <BsLaptop size={23} />
            <p>Laptop, Máy tính</p>
            <RiArrowDropDownLine size={23} />
          </div>
          <ul className="dropdown-menu-unt">
            <h4>Hãng sản xuất</h4>
            <div className="flex-btn-menu-header-unt">
              <li><Link to="/product/apple/">Apple</Link></li>
              <li><Link to="/product/samsung/">Samsung</Link></li>
              <li><Link to="/product/xiaomi/">Xiaomi</Link></li>
              <li><Link to="/product/asus/">Asus</Link></li>
              <li><Link to="/product/lenovo/">Lenovo</Link></li>
              <li><Link to="/product/huawei/">Huawei</Link></li>
              <li><Link to="/product/dell/">Dell</Link></li>
              <li><Link to="/product/msi/">Msi</Link></li>
              <li><Link to="/product/acer/">Acer</Link></li>
              <li><Link to="/shop/">Khác</Link></li>
            </div>
            <div>
              <img src={banerMenu} alt="Giới thiệu sản phẩm" />
            </div>
          </ul>
        </li>

        <li>
          <div className="unitech-dropdown-icon unitech-dropdown-icon-mobile">
            <TbSmartHome size={23} />
            <p>Smart Home</p>
            <RiArrowDropDownLine size={23} />
          </div>
          <ul className="dropdown-menu-unt">
            <h4>Hãng sản xuất</h4>
            <div className="flex-btn-menu-header-unt">
              <li><Link to="/product/apple/">Apple</Link></li>
              <li><Link to="/product/samsung/">Samsung</Link></li>
              <li><Link to="/product/xiaomi/">Xiaomi</Link></li>
              <li><Link to="/product/asus/">Asus</Link></li>
              <li><Link to="/product/lenovo/">Lenovo</Link></li>
              <li><Link to="/product/huawei/">Huawei</Link></li>
              <li><Link to="/product/dell/">Dell</Link></li>
              <li><Link to="/product/msi/">Msi</Link></li>
              <li><Link to="/product/acer/">Acer</Link></li>
              <li><Link to="/shop/">Khác</Link></li>
            </div>
            <div>
              <img src={banerMenu} alt="Giới thiệu sản phẩm" />
            </div>
          </ul>
        </li>

        <li>
          <div className="unitech-dropdown-icon unitech-dropdown-icon-mobile">
            <SlEarphones size={23} />
            <p>Phụ kiện</p>
            <RiArrowDropDownLine size={23} />
          </div>
          <ul className="dropdown-menu-unt">
            <h4>Hãng sản xuất</h4>
            <div className="flex-btn-menu-header-unt">
              <li><Link to="/product/baseus/">Baseus</Link></li>
              <li><Link to="/product/havit/">Havit</Link></li>
              <li><Link to="/product/other/">Phụ kiện khác</Link></li>
            </div>
            <div>
              <img src={banerMenu} alt="Giới thiệu sản phẩm" />
            </div>
          </ul>
        </li>
      </ul>

      <nav className={`unitech-nav-menu ${sidebar && 'unitech-active-menu'}`}>
        <ul className="unitech-nav-menu-items">
          <li>
            <button className="unitech-menu-bars" onClick={showSidebar}>
              Close
            </button>
          </li>
          <li className="unitech-nav-button-menu">
            <button>Đăng Nhập</button>
            <button>Đăng Ký</button>
          </li>
          <li className="unitech-nav-text">
            <Link to="/#/">
              <div className="unitech-dropdown-icon">
                <IoIosPhonePortrait size={23} />
                <p>Điện thoại, Tablet</p>
              </div>
            </Link>
          </li>
          <li className="unitech-nav-text">
            <Link to="/#/">
              <div className="unitech-dropdown-icon">
                <BsLaptop size={23} />
                <p>Laptop, Máy tính</p>
              </div>
            </Link>
          </li>
          <li className="unitech-nav-text">
            <Link to="/#/">
              <div className="unitech-dropdown-icon">
                <TbSmartHome size={23} />
                <p>Smart home</p>
              </div>
            </Link>
          </li>
          <li className="unitech-nav-text">
            <Link to="/#/">
              <div className="unitech-dropdown-icon">
                <SlEarphones size={23} />
                <p>Phụ kiện</p>
              </div>
            </Link>
          </li>
          <li className="unitech-nav-text">
            <Link to="/#/">
              <div className="unitech-dropdown-icon">
                <IoIosLogOut size={23} />
                <p>Đăng xuất</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBottom;