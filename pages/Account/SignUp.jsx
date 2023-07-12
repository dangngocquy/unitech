import React, { useState } from "react";
import { AiOutlineWarning } from 'react-icons/ai';
import { Link } from "react-router-dom";
import ButtonMain from '../../components/designLayouts/ButtonMain';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e) => {
    setZip(e.target.value);
    setErrZip("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Bạn chưa nhập họ tên");
      }
      if (!email) {
        setErrEmail("Bạn chưa nhập địa chỉ email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Địa chỉ Email không hợp lệ");
        }
      }
      if (!phone) {
        setErrPhone("Bạn chưa nhập số điện thoại");
      }
      if (!password) {
        setErrPassword("Bạn chưa nhập Nhập mật khẩu");
      } else {
        if (password.length < 6) {
          setErrPassword("Mật khẩu phải có ít nhất từ 6 kí tự trở lên");
        }
      }
      if (!address) {
        setErrAddress("Bạn chưa nhập địa chỉ chi tiết");
      }
      if (!city) {
        setErrCity("Vui lòng nhập thành phố mà bạn sinh sống");
      }
      if (!country) {
        setErrCountry("Bạn chưa nhập quốc gia");
      }
      if (!zip) {
        setErrZip("Bạn chưa nhập mã Zip");
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Xin chào ${clientName}, Chúng tôi đã nhận yêu cầu đăng kí của bạn vui lòng kiểm tra email ${email} của bạn trong 24h để xác nhận đăng kí`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
  };
  return (
    <div className="Sign-in-container">
      <Breadcrumbs prevLocation="Đăng ký tài khoản" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <title>Unitech - Đăng kí tài khoản</title>
        <div>
          {successMsg ? (
            <div className="main-signin">
              <p className="Signin-success">{successMsg}</p>
              <Link to="/sign-in" >
                <ButtonMain title={<div style={{ padding: '10px 20px' }}>Trang chủ</div>} />
              </Link>
            </div>
          ) : (
            <form className="Login-unitech">
              <div>
                <h3>Tạo tài khoản Unitech</h3>
                <div className="Sign-in-box">
                  <div>
                    {/* client name */}
                    <div className="gird-sign-up-unt">
                      <div className="flex-signin">
                        <p>Họ tên</p>
                        <input
                          onChange={handleName}
                          value={clientName}
                          className="Signin-unitech-input"
                          type="text"
                          placeholder="Nhập họ tên"
                        />
                        {errClientName && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errClientName}</p>
                          </div>
                        )}
                      </div>
                      {/* Email */}
                      <div className="flex-signin">
                        <p>Địa chỉ Email</p>
                        <input
                          onChange={handleEmail}
                          value={email}
                          className="Signin-unitech-input"
                          type="email"
                          placeholder="Nhập địa chĩ email đăng kí"
                        />
                        {errEmail && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errEmail}</p>
                          </div>
                        )}
                      </div>
                      {/* Phone Number */}
                      <div className="flex-signin">
                        <p>Số điện thoại</p>
                        <input
                          onChange={handlePhone}
                          value={phone}
                          className="Signin-unitech-input"
                          type="text"
                          placeholder="Nhập số điện thoại di động"
                        />
                        {errPhone && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errPhone}</p>
                          </div>
                        )}
                      </div>
                      {/* Password */}
                      <div className="flex-signin">
                        <p>Mật khẩu</p>
                        <input
                          onChange={handlePassword}
                          value={password}
                          className="Signin-unitech-input"
                          type="password"
                          placeholder="Tạo mật khẩu"
                        />
                        {errPassword && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errPassword}</p>
                          </div>
                        )}
                      </div>
                      {/* Address */}
                      <div className="flex-signin">
                        <p>Địa chỉ</p>
                        <input
                          onChange={handleAddress}
                          value={address}
                          className="Signin-unitech-input"
                          type="text"
                          placeholder="Địa chỉ"
                        />
                        {errAddress && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errAddress}</p>
                          </div>
                        )}
                      </div>
                      {/* City */}
                      <div className="flex-signin">
                        <p>Thành phố</p>
                        <input
                          onChange={handleCity}
                          value={city}
                          className="Signin-unitech-input"
                          type="text"
                          placeholder="Thành phố"
                        />
                        {errCity && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errCity}</p>
                          </div>
                        )}
                      </div>
                      {/* Country */}
                      <div className="flex-signin">
                        <p>Quốc gia</p>
                        <input
                          onChange={handleCountry}
                          value={country}
                          className="Signin-unitech-input"
                          type="text"
                          placeholder="Nhập quốc gia"
                        />
                        {errCountry && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errCountry}</p>
                          </div>
                        )}
                      </div>
                      {/* Zip code */}
                      <div className="flex-signin">
                        <p>Mã Zip</p>
                        <input
                          onChange={handleZip}
                          value={zip}
                          className="Signin-unitech-input"
                          type="text"
                          placeholder="Nhập mã Zip"
                        />
                        {errZip && (
                          <div className="Signin-text">
                            <AiOutlineWarning size={18} />
                            <p>{errZip}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Checkbox */}
                    <label className="Label-container Sign-up-flex">
                      <input
                        onChange={() => setChecked(!checked)}
                        className="Signin-unitech-input"
                        type="checkbox"
                      />
                      <span className="checkmark"></span>
                      <p>Tôi đã đọc và đồng ý với Điều Khoản Sử Dụng và Chính Sách Bảo Mật của Unitech của Unitech, bao gồm quyền thu thập, sử dụng, và tiết lộ dữ liệu cá nhân của tôi theo pháp luật quy định.</p>
                    </label>
                    <button
                      onClick={handleSignUp}
                      className={`${checked
                        ? "unitech-container-cart-button"
                        : "unitech-container-cart-button"
                        } unitech-container-cart-button`}
                    >
                      Đăng kí
                    </button>
                    <div className="Sign-in-re">
                      <p>Đã có tài khoản?</p>
                      <Link to="/sign-in">
                        <span>
                          Đăng nhập
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
