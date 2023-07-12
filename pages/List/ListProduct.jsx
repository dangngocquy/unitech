import React, { useState, useEffect } from "react";
import SaleBox from "../../components/designLayouts/SaleBox";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";
import { Link } from "react-router-dom";
import Notification from "../../components/designLayouts/Notification";
import Gift from "../../components/designLayouts/Gift";

const ListProduct = ({ datas }) => {
    const dispatch = useDispatch();
    const [sortedDatas, setSortedDatas] = useState(datas);
    const [discountPercentages, setDiscountPercentages] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false); // Biến state để kiểm tra danh sách dữ liệu có rỗng hay không
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Biến state để kiểm tra hiển thị thông báo thành công

    useEffect(() => {
        const fetchData = async () => {
            const updatedDiscountPercentages = await Promise.all(sortedDatas.map(async (itemBrand) => {
                const originalPrice = parseFloat(itemBrand.flash.replace(/[^\d]/g, ''));
                const salePrice = parseFloat(itemBrand.pricePlus.replace(/[^\d]/g, ''));
                const discountPercentageValue = ((originalPrice - salePrice) / originalPrice) * 100;
                const roundedDiscountPercentage = Math.abs(discountPercentageValue).toFixed(0);
                return roundedDiscountPercentage;
            }));
            setDiscountPercentages(updatedDiscountPercentages);
        }
        fetchData();

        // Kiểm tra danh sách dữ liệu có rỗng hay không và cập nhật biến state 'isEmpty'
        setIsEmpty(sortedDatas.length === 0);
    }, [sortedDatas]);

    const handleSortAscending = () => {
        const sortedData = [...sortedDatas].sort((a, b) => a.pricePlus - b.pricePlus);
        setSortedDatas(sortedData);
    }

    const handleSortDescending = () => {
        const sortedData = [...sortedDatas].sort((a, b) => b.pricePlus - a.pricePlus);
        setSortedDatas(sortedData);
    }

    function createSlug(str) {
        const slug = str
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .toLowerCase();
        return slug;
    }

    const handleAddToCart = (itemBrand) => {
        dispatch(
            addToCart({
                id: itemBrand.id,
                name: itemBrand.productName,
                quantity: 1,
                image: itemBrand.img,
                sale: itemBrand.sale,
                brand: itemBrand.brand,
                flash: itemBrand.flash,
                pricePlus: itemBrand.pricePlus,
            })
        );
        setShowSuccessMessage(true);
    }

    useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 300000);
            return () => clearTimeout(timer);
        }
    }, [showSuccessMessage]);

    return (
        <div className="LisProduct-unitech-container">
            <h3 className="h3-text">Sắp xếp sản phẩm theo</h3>
            <div className="SearchResultsHeader_header_button-all">
                <button onClick={handleSortDescending} className="SearchResultsHeader_button"><BiTrendingUp size={18} />Giá cao</button>
                <button onClick={handleSortAscending} className="SearchResultsHeader_button"><BiTrendingDown size={18} />Giá thấp</button>
            </div>

            {isEmpty ? (
                <div className="LisProduct-unitech-container-none"><title>Unitech -  Sản phẩm trống</title><h3>Danh mục này hiện chưa có sản phẩm</h3></div>
            ) : (
                <div className="unitech-containers-categories FlashSale-containers">
                    {sortedDatas.map((itemBrand, index) => (
                        <div className="unitech-container-box" key={itemBrand.id}>
                            <div className="Product-containers">
                                <div className="unitech-container-shop">
                                    <title>Unitech - Thương hiệu {itemBrand.brand}</title>
                                    <Link to={`/products/${createSlug(itemBrand.productName)}`}><img src={itemBrand.img} alt={itemBrand.productName} /></Link>
                                    {itemBrand.sale && <SaleBox salenumber={discountPercentages[index]} />}
                                    <div>
                                        <p style={{ color: '#2962ff' }}>{itemBrand.type}</p>
                                        <Link to={`/products/${createSlug(itemBrand.productName)}`}><p style={{ color: '#000', fontWeight: 'bold', marginTop: '3px', height: '65px' }}>{itemBrand.productName}</p></Link>
                                        <div className="unitech-box-info__box-price">
                                            <p style={{ color: 'red', fontWeight: 'bold' }}>{itemBrand.pricePlus}</p>
                                            <p style={{ color: '#707070', display: 'inline-block', fontSize: '14px', fontWeight: 600, position: 'relative', WebkitTextDecoration: 'line-through', textDecoration: 'line-through', top: '2px' }}>{itemBrand.flash}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        {itemBrand.gift &&
                                            <div>
                                                <Gift GiftTitle={itemBrand.giftTitle} />
                                            </div>
                                        }
                                        <div className="flex-price-unitech">
                                            <AiOutlineHeart size={25} className="box-price-unitech" />
                                            <AiOutlineShoppingCart size={25} className="box-price-unitech" onClick={() => handleAddToCart(itemBrand)} />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showSuccessMessage && <Notification type="success" content="Thêm vào giỏ hàng thành công!" />}
        </div>
    );
};

export default ListProduct;
