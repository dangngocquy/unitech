import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { BsFilter, BsPlusLg } from 'react-icons/bs';
import ButtonMain from '../../designLayouts/ButtonMain';
import { Laptop, phukien, Phone, smarthome, khac } from '../../../assets/images';
import Notification from '../../designLayouts/Notification';
import axios from 'axios';
import data from '../../../server/data.json';

function ListPost() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    //xử lý xóa
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/uploads');
            setImages(response.data);
        } catch (error) {
            console.error(error);
            setImages([]);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/uploads/${id}`);
            setDeleteSuccess(true);

            setTimeout(() => {
                setDeleteSuccess(false);
            }, 3000);

            const updatedImages = images.filter((image) => image.id !== id);
            setImages(updatedImages);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        if (images && images.length > 0) { // Kiểm tra images đã được khởi tạo và không rỗng
            const filteredImages = images.filter((image) =>
                image.name && event.target.value && image.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setImages(filteredImages);
        }
    };


    function slugify(str) {
        const slug = str
            .replace(/[^\w\s-]/g, '') // Loại bỏ ký tự đặc biệt, chỉ giữ lại ký tự, số, khoảng trắng và dấu gạch ngang
            .trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
            .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
            .toLowerCase(); // Chuyển thành chữ thường
        return slug;
    }

    const count = Object.keys(data.database).length;
    return (
        <div className="unitech-container-main-dashboard">
            <title>Unitech - Quản lý bài đăng</title>
            <div className='container-edit-dashboard'>
                <form className='input-container-dashboard-unt'>
                    <AiOutlineSearch size={23} onClick={handleSearchClick} className='AiOutlineSearch-icon-edit' />
                    {isSearchOpen && (
                        <div>
                            <input type="text" placeholder="Nhập từ khóa..." value={searchTerm} onChange={handleSearch} />
                        </div>
                    )}
                </form>
                <p>Tổng có <b>{count}</b> sản phẩm được đăng trong thời gian qua</p>
            </div>
            <div className='container-edit-dashboard'>
                <h1>Quản lí bài đăng</h1>
                <div className='flex-create-unt'>
                    <BsFilter size={23} className='create-dashboard-post' />
                    <ButtonMain title={<Link to="/auth/dashboard/post" style={{ padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', fontWeight: 'normal', color: '#fff' }}><BsPlusLg size={23} /><p>Tạo bài viết mới</p></Link>} />
                </div>
            </div>
            <div className='flex-box-dashboard-unt-search'>
                <div className='box-search-unt'>
                    <img src={Laptop} alt="laptop" />
                    <p>Laptop, máy tính</p>
                </div>
                <div className='box-search-unt'>
                    <img src={Phone} alt="laptop" />
                    <p>Điện thoại, Tablet</p>
                </div>
                <div className='box-search-unt'>
                    <img src={smarthome} alt="laptop" />
                    <p>Nhà thông minh</p>
                </div>
                <div className='box-search-unt'>
                    <img src={phukien} alt="laptop" />
                    <p>Phụ kiện</p>
                </div>
                <div className='box-search-unt'>
                    <img src={khac} alt="laptop" />
                    <p>Khác</p>
                </div>
            </div>
            <div className='Listport-home'>
                {images.length === 0 ? (
                    <p>Dữ liệu trống, vui lòng khởi động lại server và làm mới trang hoặc kiểm tra lại dữ liệu tồn lại</p> // Hiển thị thông báo nếu danh sách ảnh rỗng
                ) : (
                    images.map((item) => (
                        <div key={item.id} className='list-box-unt-product-dashboard'>
                            <div className='container-content-edit-dashboard'>
                                <div className='container-content-edit'>
                                    <img src={item.img} alt={item.productName} />
                                    <div className='lieght-height-unt'>
                                        <h3>{item.productName}</h3>
                                        <div className="unitech-box-info__box-price">
                                            <p style={{ color: 'red', fontWeight: 'bold' }}>{item.pricePlus}</p>
                                            <p style={{ color: '#707070', display: 'inline-block', fontSize: '14px', fontWeight: 600, position: 'relative', WebkitTextDecoration: 'line-through', textDecoration: 'line-through', top: '2px' }}>{item.flash}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bkg-container-btn'>
                                    <Link to={`edit/${item.id}`} className='backgroun-dsb-unt'>
                                        <AiOutlineEdit size={14} className='edit-btn-unt' />
                                        <p>Sửa</p>
                                    </Link>
                                    <Link to={`/products/${slugify(item.productName)}`} target="_blank" className='backgroun-dsb-unt'>
                                        <AiOutlineEye size={14} className='view-btn-unt' />
                                        <p>Xem</p>
                                    </Link>
                                    <div className='backgroun-dsb-unt' onClick={() => handleDelete(item.id)} >
                                        <AiOutlineDelete size={14} className='delete-btn-unt' />
                                        <p>Xóa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {deleteSuccess && (
                <Notification type="success" content="Xóa thành công!" />
            )}
        </div>
    );
}

export default ListPost;