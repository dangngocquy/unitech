import { CiMenuKebab } from 'react-icons/ci';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoIosClose } from "react-icons/io";
import { TbExclamationMark } from "react-icons/tb";
import { BsPostcard, BsArrowUpShort, BsArrowRightShort } from 'react-icons/bs';
import data from '../../../server/data.json';

function Main() {
    const count = Object.keys(data.database).length;
    return (
        <div className="unitech-container-main-dashboard">
            <title>Unitech - Dashboard</title>
            <div className="unitech-box-dashboard">
                <div className="box-dashboard1">
                    <div className='box1-flex'>
                        <h2>Tỷ lệ đơn hàng</h2>
                        <CiMenuKebab size={21} className='CiMenuKebab-unt' />
                    </div>
                    <div className='number-box-unitech'>
                        <span className='nb-unt-container'>
                            <h3>255</h3>
                            <p>Tổng đơn hàng</p>
                        </span>
                        <span className='center-dashboard'></span>
                        <span className='nb-unt-container'>
                            <h3>46%</h3>
                            <p>Tăng trưởng</p>
                        </span>
                    </div>
                    <div className='box-product-dashboard-container'>
                        <span className='box-number-unt'>
                            <AiOutlineCheck size={21} className='icon-box-unt' />
                            <span className='text-box-dashboard-unt'>
                                <h4>Số đơn hàng cần xử lý</h4><p>(221) đơn hàng</p>
                            </span>
                        </span>
                        <span className='box-number-unt'>
                            <IoIosClose size={21} className='icon-box-unt1' />
                            <span className='text-box-dashboard-unt'>
                                <h4>Đơn hàng đã hủy</h4><p>(22) đơn hàng</p>
                            </span>
                        </span>
                        <span className='box-number-unt'>
                            <TbExclamationMark size={21} className='icon-box-unt2' />
                            <span className='text-box-dashboard-unt'>
                                <h4>Đơn hàng qua hạn</h4><p>(2) đơn hàng</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="box-dashboard2">Box biểu đồ đang phát triển sau</div>
            </div>
            <div className="box-dashboard3">
                <div className='box3-unt-container'>
                    <h2>Bảng thống kê</h2>
                    <p>Nhấn vào các box để xem các thông tin <b>chi tiết</b> của bảng thống kê</p>
                </div>
                <div className='box-select-unt'>
                    <div className='container-box-main'>
                        <BsPostcard size={21} className='unt-icon-tk' />
                        <b>Tổng bài viết</b>
                        <span className='sum-box-unt'>
                            <h1>{count}</h1>
                            <BsArrowUpShort size={31} className='sum-box-unt-icon' />
                        </span>
                    </div>
                    <div className='container-box-main'>
                        <BsPostcard size={21} className='unt-icon-tk' />
                        <b>Tổng bài viết</b>
                        <span className='sum-box-unt'>
                            <h1>133</h1>
                            <BsArrowUpShort size={31} className='sum-box-unt-icon' />
                        </span>
                    </div>
                    <div className='container-box-main'>
                        <BsPostcard size={21} className='unt-icon-tk' />
                        <b>Tổng bài viết</b>
                        <span className='sum-box-unt'>
                            <h1>133</h1>
                            <BsArrowUpShort size={31} className='sum-box-unt-icon' />
                        </span>
                    </div>
                    <div className='container-box-main'>
                        <BsPostcard size={21} className='unt-icon-tk' />
                        <b>Tổng bài viết</b>
                        <span className='sum-box-unt'>
                            <h1>133</h1>
                            <BsArrowUpShort size={31} className='sum-box-unt-icon' />
                        </span>
                    </div>
                    <div className='container-box-main2'>
                        <BsPostcard size={21} className='unt-icon-tk' />
                        <b>Xem tất cả</b>
                        <span className='sum-box-unt'>
                            <BsArrowRightShort size={31} className='sum-box-unt-icon-next' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;