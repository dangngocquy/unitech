import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Banner2, bannerSlider2, bannerSlider1, bannerSlider3 } from "../../assets/images";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const images = [bannerSlider2, bannerSlider1, bannerSlider3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentState => (currentState === images.length - 1 ? 0 : currentState + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => setCurrentSlide(currentState => (currentState === 0 ? images.length - 1 : currentState - 1));
  const handleNext = () => setCurrentSlide(currentState => (currentState === images.length - 1 ? 0 : currentState + 1));

  //slider 2
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [sliderData] = useState([
    {
      id: 1,
      image: Banner2,
      text: "Thu cũ tận nhà",
      content: "Thủ tục nhanh chóng",
      link: "thu-cu/"
    },
    {
      id: 2,
      image: bannerSlider1,
      text: "Sản phẩm mới",
      content: "Giá hot",
      link: "#/"
    },
    {
      id: 3,
      image: bannerSlider3,
      text: "Đồ cũ",
      content: "Chất lượng giá rẻ",
      link: "#/"
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlider();
    }, 5000);


    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNextSlider = () => {
    const newIndex = currentIndex === sliderData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevSlider = () => {
    const newIndex = currentIndex === 0 ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleGoToSlider = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <title>UnitechStore - Đồ công nghệ cũ 2nd</title>
      <div className="unitech-banner">
        <div className="unitech-container-banner">
          <div className="unitech-banner2">
            {images.map((image, index) => (
              <div key={index} className={`slider-image ${index === currentSlide ? "active" : ""}`}>
                <img src={image} alt={`Slide ${index + 1}`} />
                <button className="unitech-bottom">Mua ngay</button>
              </div>
            ))}
            <div className="unitech-slide">
              <AiOutlineLeft className="slider-prev" onClick={handlePrev} />
              <AiOutlineRight className="slider-next" onClick={handleNext} />
            </div>
          </div>
          <div
            className="slider-Banner-unitech unitech-container-img"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div className={`prev-banner-slider2 ${showControls ? 'active-banner-slider2' : ''}`} onClick={handlePrevSlider}>
              <AiOutlineLeft />
            </div>
            <div className={`next-banner-slider2 ${showControls ? 'active-banner-slider2' : ''}`} onClick={handleNextSlider}>
              <AiOutlineRight />
            </div>
            <Link to={sliderData[currentIndex].link}>
              <img src={sliderData[currentIndex].image} alt={`slider ${currentIndex}`} />
            </Link>
            <div className="controls-slider2">
              {sliderData.map((slider, index) => (
                <div
                  key={slider.id}
                  className={`slider-control-slider2 ${currentIndex === index ? 'active-banner-slider2' : ''}`}
                  onClick={() => handleGoToSlider(index)}
                >
                  <div className="text-banner-text">
                    <p style={{ textTransform: 'uppercase', fontSize: '13px' }}>{slider.text}</p>
                    <p style={{ fontSize: '11px' }}>{slider.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;