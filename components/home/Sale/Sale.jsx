import React, { useState, useEffect } from "react";
import FlashSale from './FlashSale';
import data from '../../../server/data.json';

const Sale = () => {
  const [countdown, setCountdown] = useState('');
  //tính toán % giá giảm nhiều nhất
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);

  const highestDiscountedItem = data.database.reduce((maxDiscountItem, currentItem) => {
    const originalPrice = parseFloat(currentItem.flash.replace(/[^\d]/g, ""));
    const salePrice = parseFloat(currentItem.pricePlus.replace(/[^\d]/g, ""));
    const discountPercentageValue = ((originalPrice - salePrice) / originalPrice) * 100;
    const roundedDiscountPercentage = Math.round(discountPercentageValue);
    if (!maxDiscountItem || roundedDiscountPercentage > maxDiscountItem.discountPercentage) {
      return { ...currentItem, discountPercentage: roundedDiscountPercentage };
    }

    return maxDiscountItem;
  }, { discountPercentage: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date("June 30, 2024 17:47:59").getTime();
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
        setIsCountdownEnded(true);
        clearInterval(interval);
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString().padStart(2, "0");

        setCountdown(
          <div className="countdowns">
            <div className="box-coudown">{days}</div>:
            <div className="box-coudown">{hours}</div>:
            <div className="box-coudown">{minutes}</div>:
            <div className="box-coudown">{seconds}</div>
          </div>
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isCountdownEnded) {
    return null; // Ẩn trang nếu flashsale kết thúc
  }

  return (
    <div className="unitech-sale-container">
      <div className="unitech-sale-couter">
        <h1>Flash Sale giảm đến {highestDiscountedItem.discountPercentage}%</h1>
        <div className="countdown">
          <p>Kết thúc sau:</p>
          <div>{countdown}</div>
        </div>
      </div>
      <FlashSale />
    </div>
  );
};

export default Sale;