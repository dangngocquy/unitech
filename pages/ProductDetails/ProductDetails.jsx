import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useState, useEffect, useContext } from 'react';
import { AiOutlineSetting, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { RiVipCrown2Line } from 'react-icons/ri';
import { MdOutlineEditNote } from 'react-icons/md';
import { gift } from '../../assets/images';
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/orebiSlice';
import Notification from '../../components/designLayouts/Notification';
import ProductRecommendation from './ProductRecommendation';
import Rating from '../../components/Star/Rating';
import SlideImages from './SlideImages';
import ButtonMain from '../../components/designLayouts/ButtonMain';
import data from '../../server/data.json';
import parse from 'html-react-parser';
import ButtonOption from '../../components/designLayouts/ButtonOption';
import Comments from './comments/Comments';
import { NotificationContext } from '../../components/home/Products/NotificationContext';

// Hàm tạo slug tuỳ chỉnh
function createSlug(str) {
  const slug = str
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
  return slug;
}

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showFullContent, setShowFullContent] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };


  const handleSeeMore = () => {
    setShowFullContent(!showFullContent);
  };

  //chuyển Tab
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const { productName } = useParams();
  const product = data.database.find((product) => createSlug(product.productName) === productName);

  //tính toán sale
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [showSuccess] = useState(false);


  useEffect(() => {
    const originalPrice = parseFloat(product && product.flash.replace(/[^\d]/g, ''));
    const salePrice = parseFloat(product && product.pricePlus.replace(/[^\d]/g, ''));
    const discountPercentageValue = ((originalPrice - salePrice) / originalPrice) * 100;
    const roundedDiscountPercentage = Math.abs(discountPercentageValue).toFixed(0);
    setDiscountPercentage(roundedDiscountPercentage);
  }, [product]);

  const goBack = () => {
    navigate(-1);
  };
  const { setNotify } = useContext(NotificationContext);

  const handleAddToCart = () => {
    // Thêm sản phẩm vào giỏ hàng
    dispatch(
      addToCart({
        id: product.id,
        name: product.productName,
        quantity: 1,
        image: product.img,
        sale: product.sale,
        brand: product.brand,
        flash: product.flash,
        pricePlus: product.pricePlus,
        color: selectedColor,
      })
    );

    // Hiển thị thông báo thành công
    setNotify(<Notification type="success" content="Thêm vào giỏ hàng thành công!" />);
    setTimeout(() => {
      setNotify("");
    }, 4000);
  };
  if (!product) {
    return <div>
      <title>Unitech - Sản phẩm không tồn tại</title>
      <h3 className='LisProduct-unitech-container-none LisProduct-unitech-container'>Sản phẩm không tồn tại trên hệ thống !<ButtonMain title={<div onClick={goBack} style={{ padding: '10px' }}>Quay lại</div>} /></h3>
    </div>;
  }
  return (
    <div className="ProductDetails-containers" key={product.id}>
      <title>Unitech - {product.productName}</title>
      <div>
        <Breadcrumbs prevLocation={product.productName} />
        <div className='item-list'>

          <h3 className='ProductDetails-h3'>{product.productName}</h3>
          <div className='box-sale-gift'>(-{discountPercentage}%)</div>
        </div>
        <div className="flex-product">
          <div className='Unitech-main-content'>
            <div className='width-slide-producdetails'>
              <SlideImages images={Object.values(product.slide)} />
            </div>
            <div className="sale-price-unitech">
              <p style={{ color: 'red', fontWeight: 'bold', fontSize: '21px' }}>{product.pricePlus}</p>
              <p style={{ color: '#707070', display: 'inline-block', fontSize: '16px', fontWeight: 600, margin: '0 0 0 10px', position: 'relative', WebkitTextDecoration: 'line-through', textDecoration: 'line-through' }}>{product.flash}</p>
              <Rating />
            </div>
            <div className='box'>
              {product.romswicth &&
                <div>
                  <b>Chọn dung lượng</b>
                  <div className='flex-btn-option'>
                    {product.datarom && product.datarom.map((datarom) => (
                      <ButtonOption key={datarom.id} ButtonRom={datarom.datarom1} />
                    ))}
                  </div>
                </div>
              }
              {product.colorswicth &&
                <div>
                  <b>Chọn màu sắc</b>
                  <div className='flex-btn-option'>
                    {product.color && product.color.map((colorItem) => (
                      <button
                        key={colorItem.id}
                        className={`color-item ${selectedColor === colorItem.color1 ? "active" : ""}`}
                        onClick={() => handleColorClick(colorItem.color1)}
                      >
                        <div style={{ backgroundColor: colorItem.color1 }} className='border-color'></div>
                        {colorItem.colors1}
                      </button>
                    ))}
                  </div>
                </div>
              }
            </div>
            <div className='flex-shopping-unitech-details'>
              <div className='flex-btn-unt-cart'>
                <AiOutlineHeart size={60} className='cart-button-unitech-prodetails' />
                <AiOutlineShoppingCart size={60} className='cart-button-unitech-prodetails' onClick={handleAddToCart} />
              </div>
              <button className='Mua-ngay'>Mua ngay</button>
            </div>
            {/* <div className="text-p">
              <b>Danh mục:</b>
              <p>{product.type}</p>
            </div> */}
          </div>
          <div className='config-discount-unitech'>
            <div className="Unitech-main-content2">
              <div>
                <div className="iphone-config__options">
                  <div className='box-config-container'>
                    <div className='dlex-config'>
                      <RiVipCrown2Line size={25} onClick={() => handleClick('tab1')} className={activeTab === 'tab1' ? 'icon-pro  button-details-active' : 'icon-pro '} />
                      <p onClick={() => handleClick('tab1')} className={activeTab === 'tab1' ? 'button-details-active' : ''}>Đặc điểm nổi bật</p>
                    </div>
                    <div className='dlex-config'>
                      <AiOutlineSetting size={25} onClick={() => handleClick('tab2')} className={activeTab === 'tab2' ? 'icon-pro button-details-active' : 'icon-pro'} />
                      <p onClick={() => handleClick('tab2')} className={activeTab === 'tab2' ? 'button-details-active' : ''}>Cấu hình chi tiết</p>
                    </div>
                    <div className='dlex-config'>
                      <MdOutlineEditNote size={25} onClick={() => handleClick('tab3')} className={activeTab === 'tab3' ? 'icon-pro  button-details-active' : 'icon-pro '} />
                      <p onClick={() => handleClick('tab3')} className={activeTab === 'tab3' ? 'button-details-active' : ''}>Thông tin sản phẩm</p>
                    </div>
                  </div>
                </div>
                {activeTab === 'tab2' &&
                  <ul className="iphone-config__list PD-unitech">
                    {product.config.display &&
                      <li>
                        <p>Màn hình:</p>
                        <p>{product.config.display}</p>
                      </li>}

                    {product.config.resolution &&
                      <li>
                        <p>Độ phân giải:</p>
                        <p>{product.config.resolution}</p>
                      </li>}

                    {product.config.chip &&
                      <li>
                        <p>Chip:</p>
                        <p>{product.config.chip}</p>
                      </li>}

                    {product.config.card &&
                      <li>
                        <p>Card đồ họa:</p>
                        <p>{product.config.card}</p>
                      </li>}

                    {product.config.memory &&
                      <li>
                        <p>Ram:</p>
                        <p>{product.config.memory}</p>
                      </li>}

                    {product.config.typeram &&
                      <li>
                        <p>Loại Ram:</p>
                        <p>{product.config.typeram}</p>
                      </li>}

                    {product.config.internalmemory &&
                      <li>
                        <p>Bộ nhớ trong:</p>
                        <p>{product.config.internalmemory}</p>
                      </li>}

                    {product.config.harddrive &&
                      <li>
                        <p>Ổ cứng:</p>
                        <p>{product.config.harddrive}</p>
                      </li>}

                    {product.config.camera &&
                      <li>
                        <p>Camera:</p>
                        <p>{product.config.camera}</p>
                      </li>}

                    {product.config.pin &&
                      <li>
                        <p>Pin:</p>
                        <p>{product.config.pin}</p>
                      </li>}

                    {product.config.system &&
                      <li>
                        <p>Hệ điều hành:</p>
                        <p>{product.config.system}</p>
                      </li>}
                    {product.configuration && product.configuration.map((configuration) => (
                      <li key={configuration.id}>
                        <p>{configuration.name}</p>
                        <p>{configuration.config}</p>
                      </li>
                    ))}
                  </ul>
                }
                {activeTab === 'tab1' && <div className='PD-unitech'><div className="hide-text" style={{ lineHeight: '26px', fontSize: '13px' }}>{parse(product.content)}</div></div>}
                {activeTab === 'tab3' && <div className='PD-unitech'><div className="hide-text" style={{ lineHeight: '26px', fontSize: '13px' }}>{parse(product.proin)}</div></div>}
              </div>
            </div>
            <div className='unitech-gift'>
              <span>
                <div className='Style-productdetails'>
                  <img src={gift} alt="gif" />
                  <span className='box-gif-unitech-shopping'>
                    <h4>Khuyến mãi</h4>
                    <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 30/12/2023</p>
                  </span></div>
                <div className='Productdetails-gift'>
                  <span className='box-text-code'>
                    <h3>1</h3>
                    <p>Nhập mã UNITECH giảm ngay 50.000 ₫</p>
                  </span>
                  <span className='box-text-code'>
                    <h3>2</h3>
                    <p>Nhập mã KHUYENMAI giảm ngay 100.000 ₫</p>
                  </span>
                  <span className='box-text-code'>
                    <h3>3</h3>
                    <p>Nhập mã THANDEAL giảm ngay 200.000 ₫</p>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='ItemCard-border-botoom'></div>
        <div className="Price-de-xuat">
          <h2>Sản phẩm liên quan được đề xuất</h2>
          <div className='hidden-slider-product'>
            <ProductRecommendation />
          </div>
        </div>
        <div className='flex-box-details'>
          <div className='producdetails-comment'>
            <div className='producdetails-comment-box1'>
              <div className={`overlay-Details ${showFullContent ? 'hide-unt' : ''}`}>
                <div>
                  <button onClick={handleSeeMore} className='btn-show-unt'>
                    Xem thêm
                  </button>
                </div>
              </div>
              <div className={`${showFullContent ? '' : 'hide-unt'}`}>
                {parse(product.introduce)}
                <div className='flex-content-unt-btn'>
                  <button onClick={handleSeeMore} className='btn-show-unt2'>Thu gọn</button>
                </div>
              </div>
              {showFullContent || (
                <div className="content-preview">
                  {parse(product.introduce.slice(0, 1000))}...
                </div>
              )}
            </div>
            <div className='producdetails-comment-box2'>
              <h4>Đánh giá và bình luận sản phẩm {product.productName}</h4>
              <div className='star-unitech'>
                Chức năng đánh giá đang được phát triển
              </div>
              {product.commentson &&
                <Comments imageId={product.id} />
              }
            </div>
          </div>
          <div className='box2'>
            Chức năng đang được cập nhật...
          </div>
        </div>
      </div>
      {showSuccess && <Notification type="success" content="Thêm vào giỏ hàng thành công!" />}
    </div>
  );
}

export default ProductDetails;
