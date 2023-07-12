import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Logo, LogoMobile } from '../../../assets/images';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogout, AiOutlineEdit } from 'react-icons/ai';
import { FaListAlt } from 'react-icons/fa';
import { TbHttpPost } from 'react-icons/tb';
import React, { useState } from 'react';
import { setLoggedOut } from '../Auth/Auth';

function HeaderLeft() {
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogout = () => {
        setLoggedOut(); // Cập nhật trạng thái đăng nhập về false
        // Thực hiện các xử lý khác nếu cần thiết khi đăng xuất
        navigate("/login"); // Chuyển hướng đến trang đăng nhập
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // Lấy thông tin người dùng đã đăng nhập từ localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        return null; // Chuyển hướng đến "/login" nếu không có thông tin người dùng đã đăng nhập
    }


    const isActive = (path) => {
        return location.pathname === path ? "button-link-unitech-dashboard active-button-link-unitech-dashboard" : "button-link-unitech-dashboard";
    };

    return (
        <div>
            <div className="unitech-headerleft-container className='mobile-reponsive-menuleft'">
                <Link to="/" className="unitech-logo-pc" target='_blank'>
                    <img src={Logo} alt="Logo" width="230" height="28" />
                </Link>
                <div className='unitech-line-dashboard'>
                    <div className='avatar-dashboard-unitech'>
                        <div className='edit-img-dashbord-unt'>
                            <img src={LogoMobile} alt='avatar' />
                            <AiOutlineEdit size={23} className='icon-edit-avt' />
                        </div>
                        <h3>{loggedInUser.name}</h3>
                        <p>{loggedInUser.position}</p>
                    </div>

                    <div className='unitech-dashboard-link-routes'>
                        <NavLink to="/auth/dashboard" className={isActive("/auth/dashboard")}><AiOutlineHome size={18} />Dashboard</NavLink>
                        <NavLink to="/auth/dashboard/order-list" className={isActive("/auth/dashboard/oder-list")}><FaListAlt size={18} />Danh sách đơn hàng</NavLink>
                        <NavLink to="/auth/dashboard/list-post" className={isActive("/auth/dashboard/list-post")}><TbHttpPost size={18} />Quản lí bài đăng</NavLink>
                        <NavLink className={isActive("/auth/dashboard/product")}><AiOutlineShoppingCart size={18} />Quản lí sản phẩm</NavLink>
                        <NavLink className={isActive("/auth/dashboard/user")}><AiOutlineUser size={18} />Quản lí người dùng</NavLink>
                        <NavLink className={isActive("/auth/dashboard/update")}><AiOutlineUser size={18} />Quản trị</NavLink>
                    </div>

                    <NavLink className="Log-out-dashboard" onClick={handleLogout}><AiOutlineLogout />Đăng xuất</NavLink>
                </div>
            </div>
            <div>
                <div className="menuMobile-dashboards">
                    <div className="menu__button" onClick={toggleMenu}>
                        Menu
                    </div>
                    {isOpen && (
                        <ul className="menu__list">
                            <li className="menu__item">Item 1</li>
                            <li className="menu__item">Item 2</li>
                            <li className="menu__item">Item 3</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeaderLeft;
