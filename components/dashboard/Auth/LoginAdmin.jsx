import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from '../../../assets/images';
import { Link } from "react-router-dom";
import Notification from "../../designLayouts/Notification";

import { setLoggedIn } from "./Auth";
const LoginAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const database = [
        {
            "id": 1,
            "name": "Đặng Ngọc Quý",
            "mail": "abc@gmail.com",
            "password": "abc",
            "position": "Quản trị viên"
        },
        {
            "id": 2,
            "name": "Nam",
            "mail": "edf@gmail.com",
            "password": "edf",
            "position": "Kiểm duyệt viên"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = database.find((user) => user.mail === email && user.password === password);

        if (user) {
            setLoggedIn(); // Gọi hàm setLoggedIn từ Auth.js để xác định người dùng đã đăng nhập thành công
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            navigate("/auth/dashboard");
        } else {
            setError(<Notification type="error" content="ài khoản hoặc mật khẩu không chính xác!" />);
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    };

    return (
        <div className="login-dashboard-container">
            <title>Unitech - Đăng nhập Dashboard</title>
            <div className="flex-login-dashboard">
                <Link to="/"><img src={Logo} alt="Logo Unitech" /></Link>
                <h2>Đăng nhập Dashboard</h2>
            </div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className="Sign-in-box">
                <div className="flex-signin">
                    <p>
                        Địa chỉ Email
                    </p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="Signin-unitech-input"
                    />
                </div>
                <div className="flex-signin">
                    <p>
                        Mật khẩu
                    </p>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="Signin-unitech-input"
                    />
                </div>
                <button type="submit" className="unitech-container-cart-button">Đăng nhập</button>
            </form>
        </div>
    );
};

export default LoginAdmin;
