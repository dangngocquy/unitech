import React, { useState } from "react";
import { motion } from "framer-motion";
import { Vietnam, Japan, Eng } from "../../../assets/images";
import { GrFacebookOption, GrUpdate } from 'react-icons/gr';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiMailSendLine, RiDoubleQuotesL } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Vui lòng nhập địa chỉ Email");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Email không hợp lệ!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <footer className="unitech-containers-footer">
      <div className="unitech-reponsive-footer">
        <div className="unitech-reponsive-part1">
          <div className="list-link">
            <span style={{ marginRight: '2rem' }}>
              <div className="font-footer">Sản phẩm</div>
              <span className="unitech-link">
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Iphone 14 pro max</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Laptop</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Macbook</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Phụ kiện</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Xem thêm</div> </a>
              </span>
            </span>

            <span style={{ marginRight: '2rem' }}>
              <div className="font-footer">Thông tin chính sách</div>
              <span className="size-unitech">
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Mua hàng và thanh toán online</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Chính sách bảo hành</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Tra cứu đơn hàng</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Dịch vụ khắc phục sự cố</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Chính sách đổi trả</div> </a>
              </span>
            </span>

            <span style={{ marginRight: '2rem' }}>
              <div className="font-footer">Dịch vụ và thông tin khác</div>
              <span className="size-unitech">
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Khách hàng doanh nghiệp (B2B)</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Quy chế hoạt động</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Liên hệ hợp tác kinh doanh</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Quy định về việc sao lưu dữ liệu</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Tuyển dụng</div> </a>
              </span>
            </span>

            <span style={{ marginRight: '2rem' }}>
              <div className="font-footer">Bảo hành</div>
              <span className="size-unitech">
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Dịch vụ bảo hành tại nhà</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Liên hệ bảo hành</div> </a>
                <a href="#/" className="unitech-size-link-footer"> <div className="font-footer2">Trung tâm bảo hành</div> </a>
              </span>
            </span>
          </div>
        </div>
        <div className="unitech-reponsive-part2">
          <div className="header-container-footer">
            <div onClick={() => handleClick('tab1')} className={activeTab === 'tab1' ? 'footer-active' : 'footer-active-before'}>
              <FiUsers size={23} className="unitech-icon-footer" />
              {/*<p>Liên hệ</p>*/}
            </div>
            <div onClick={() => handleClick('tab2')} className={activeTab === 'tab2' ? 'footer-active' : 'footer-active-before'}>
              <RiDoubleQuotesL size={23} className="unitech-icon-footer" />
              {/*<p>Trích dẫn hay</p>*/}
            </div>
            <div onClick={() => handleClick('tab3')} className={activeTab === 'tab3' ? 'footer-active' : 'footer-active-before'}>
              <GrUpdate size={23} className="unitech-icon-footer" />
              {/*<p>Update</p>*/}
            </div>
          </div>
        </div>
        <div className="unitech-reponsive-part3">
          <div className="tab-content">
            {activeTab === 'tab1' &&
              <div className="Resiter_news_column">
                <div className="Resiter_news_o">
                  <RiMailSendLine size={32} />
                  <div className="Resiter_news_o_fl">
                    <b>Liên hệ</b>
                    <span>Contact@unitech.com</span>
                  </div>
                </div>
                <div className="Resiter_news_o">
                  <IoIosSend size={32} />
                  <div className="Resiter_news_o_fl">
                    <b>Liên hệ hỗ trợ</b>
                    <span>Support@unitech.com</span>
                  </div>
                </div>
              </div>
            }
            {activeTab === 'tab2' && <p>Chức năng đang được phát triển</p>}
            {activeTab === 'tab3' && <p>Chức năng đang được phát triển</p>}
          </div>
        </div>
        <div className="unitech-reponsive-part4">
          <button><img src={Vietnam} alt="Việt nam" className="unitech-footer-img" /><span className="unitech-footer_text">Tiếng việt</span></button>
          <button><img src={Eng} alt="English" className="unitech-footer-img" /><span className="unitech-footer_text">English</span></button>
          <button><img src={Japan} alt="日本語" className="unitech-footer-img" /><span className="unitech-footer_text">日本語</span></button>
        </div>
        <div className="unitech-reponsive-part5">

          <div>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p style={{ color: 'green' }} >Gửi thành công!</p>
              </motion.p>
            ) : (
              <div className="contact-footer">
                <div>
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    type="text"
                    placeholder="Địa chỉ email"
                  />
                </div>
                <button
                  onClick={handleSubscription}
                >
                  GỬI
                </button>
              </div>
            )}
            {errMsg && (
              <p className="nocation-footer">
                {errMsg}
              </p>
            )}
          </div>
        </div>
        <div className="unitech-reponsive-part6">
          <div className="unitech-reponsive-part6-container" style={{ fontSize: '13px' }}>
            <div className="uxui">
              <p className="dgblll ntyhb">All rights reserved © {new Date().getFullYear()}</p>
              <a href="/" className=" svbf loitaiai" style={{ whiteSpace: 'nowrap', fontWeight: 'bold', color: 'rgb(15, 23, 36)' }}> UNITECH</a>
            </div>

            <div className="uxui">
              <a href="#/" className="bold">Chính sách bảo mật</a>
              <a href="#/" className="bold">Điều khoản</a>
              <a href="#/" className="bold">Góp ý</a>
            </div>
          </div>
        </div>
        <div className="unitech-reponsive-part7">
          <div className="unitech-social">
            <GrFacebookOption className="GrFacebookOption" />
            <FaInstagram className="FaInstagram" />
            <FaTwitter className="FaTwitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
