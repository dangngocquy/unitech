import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ButtonMain from "../../components/designLayouts/ButtonMain";
import { AiOutlineWarning } from "react-icons/ai";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setPrevLocation(location?.state?.data || "");
  }, [location]);

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const emailValidation = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  const handlePost = (e) => {
    e.preventDefault();
    let valid = true;
    if (!clientName.trim()) {
      setErrClientName("Vui lòng nhập họ tên");
      valid = false;
    }
    if (!email.trim()) {
      setErrEmail("Vui lòng nhập địa chỉ email");
      valid = false;
    } else if (!emailValidation(email)) {
      setErrEmail("Email không hợp lệ");
      valid = false;
    }
    if (!messages.trim()) {
      setErrMessages("Vui lòng nhập ý kiến của bạn");
      valid = false;
    }
    if (valid) {
      setSuccessMsg(
        `Cảm ơn bạn ${clientName} đã liên hệ với chúng tôi, bạn sẽ nhận được phản hồi sớm nhất tại địa chỉ email ${email} của mình.`
      );
    }
  };

  return (
    <div className="main-signin">
      <title>Unitech - Liên hệ</title>
      <Breadcrumbs title="Liên hệ" prevLocation={prevLocation} />
      {!!successMsg ? (
        <div className="main-signin">
          <p className="Signin-success">{successMsg}</p>
          <Link to="/">
            <ButtonMain title={<div style={{ padding: "10px 20px" }}>Trang chủ</div>} />
          </Link>
        </div>
      ) : (
        <form className="Cart-contact-text">
          <h3>Đóng góp ý kiến</h3>
          <div className="Sign-in-box">
            <div>
              <div className="flex-signin">
                <p>Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  type="text"
                  placeholder="Nhập họ tên"
                  className="Signin-unitech-input"
                />
                {!!errClientName && (
                  <div className="Signin-text">
                    <AiOutlineWarning size={18} />
                    <p>{errClientName}</p>
                  </div>
                )}
              </div>
              <div className="flex-signin">
                <p>Email</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  className="Signin-unitech-input"
                />
                {!!errEmail && (
                  <div className="Signin-text">
                    <AiOutlineWarning size={18} />
                    <p>{errEmail}</p>
                  </div>
                )}
              </div>
              <div className="flex-signin">
                <p>Messages</p>
                <textarea
                  onChange={handleMessages}
                  value={messages}
                  placeholder="Nhập ý kiến..."
                  style={{
                    border: "none",
                    background: "#f3f4f6",
                    padding: "5px 20px",
                    outline: "none",
                    height: "46px",
                    marginTop: "5px",
                    resize: "none"
                  }}
                />
                {!!errMessages && (
                  <div className="Signin-text">
                    <AiOutlineWarning size={18} />
                    <p>{errMessages}</p>
                  </div>
                )}
              </div>
              <button onClick={handlePost} className="ButtonMain" style={{ padding: "10px 20px" }}>Gửi</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
