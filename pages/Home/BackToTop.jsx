import React, { useState, useEffect } from 'react';
import { GoMoveToTop } from 'react-icons/go';

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Thêm sự kiện lắng nghe khi người dùng cuộn trang
        window.addEventListener('scroll', handleScroll);

        // Xóa sự kiện lắng nghe khi unmount component
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Xử lý sự kiện cuộn trang
    const handleScroll = () => {
        // Kiểm tra vị trí cuộn của trang
        const scrollY = window.scrollY;
        const threshold = 300;

        if (scrollY > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Xử lý sự kiện nhấp chuột vào nút "Back to Top"
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <GoMoveToTop size={23} className={`backtotop ${isVisible ? 'visible' : ''}`} onClick={handleBackToTop} />
    );
}

export default BackToTopButton;
