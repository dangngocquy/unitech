import React, { useState } from "react";
import { AiOutlineWarning } from 'react-icons/ai';
import { Link } from "react-router-dom";
import ButtonMain from '../../components/designLayouts/ButtonMain';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Bạn chưa nhập địa chỉ email");
      return;
    }

    if (!password) {
      setErrPassword("Vui lòng nhập mật khẩu");
      return;
    }

    setSuccessMsg(
      `Chúng tôi đã gửi một liên kết qua địa chỉ email ${email} của bạn vui lòng nhấp vào liên kết mà chúng tôi đã gửi để tiến hành đăng nhập`
    );
    setEmail("");
    setPassword("");
  };
  

  const renderErrorMsg = (msg) => {
    return (
      <div className="Signin-text">
        <AiOutlineWarning size={18} />
        <p>{msg}</p>
      </div>
    );
  }

  return (
    <div className="Sign-in-container">
      <Breadcrumbs prevLocation="Đăng nhập" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <title>Unitech - Đăng nhập</title>
        {successMsg ? (
          <div className="main-signin">
            <p className="Signin-success">{successMsg}</p>
            <Link to="/" >
              <ButtonMain title={<div style={{ padding: '10px 20px' }}>Trang chủ</div>} />
            </Link>
          </div>
        ) : (
          <form className="Login-unitech">
            <div>
              <h3>Chào mừng bạn đến với Unitech, Đăng nhập ngay!</h3>
              <div className="Sign-in-box">
                <div>
                  {/* Email */}
                  <div className="flex-signin">
                    <p>
                      Địa chỉ Email
                    </p>
                    <input
                      onChange={handleEmailChange}
                      value={email}
                      className="Signin-unitech-input"
                      type="email"
                      placeholder="Nhập địa chỉ email"
                    />
                    {errEmail && renderErrorMsg(errEmail)}
                  </div>

                  {/* Password */}
                  <div className="flex-signin">
                    <p>Mật khẩu</p>
                    <input
                      onChange={handlePasswordChange}
                      value={password}
                      className="Signin-unitech-input"
                      type="password"
                      placeholder="Nhập mật khẩu"
                    />
                    {errPassword && renderErrorMsg(errPassword)}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="unitech-container-cart-button"
                  >
                    Đăng nhập
                  </button>
                  <div className="Sign-in-re">
                    <p>Chưa có tài khoản?</p>
                    <Link to="/sign-up">
                      <span>
                        Đăng ký
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
  );
};

export default SignIn;