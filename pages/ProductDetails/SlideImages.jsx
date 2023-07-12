import React, { useState, useEffect, useRef } from 'react';
import { GrFormPrevious, GrFormNext, GrFormDown, GrFormUp } from "react-icons/gr";

const SlideImages = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [startIdx, setStartIdx] = useState(0);
    const intervalRef = useRef(null);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setSelectedImage(images[currentIndex]);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setSelectedImage(images[currentIndex]);
    };

    const selectImage = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };

    useEffect(() => {
        setSelectedImage(images[currentIndex]);
    }, [currentIndex]);

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        };

        startInterval();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleNext = () => {
        nextSlide();
    };

    const handlePrev = () => {
        prevSlide();
    };

    const handleNextSlide2 = () => {
        if (startIdx + 3 < images.length) {
            setStartIdx((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevSlide2 = () => {
        if (startIdx > 0) {
            setStartIdx((prevIndex) => prevIndex - 1);
        }
    };

    const displayedImages = images.slice(startIdx, startIdx + 3);

    return (
        <div className='unitech-ProductDetails-box-images'>
            <img src={selectedImage} alt="Hình ảnh chứa sản phẩm" className='images-slider-show' />

            <div className="unitech-btn-click-active">
                {startIdx > 0 && (
                    <div>
                        <GrFormUp onClick={handlePrevSlide2} className='SliderImage-unitech-button-pre SliderImage-unitech-button-container Desktop-btnl-slide-productdetails' />
                        <GrFormPrevious onClick={handlePrevSlide2} className='SliderImage-unitech-button-pre SliderImage-unitech-button-container mobile-btnl-slide-productdetails' />
                    </div>
                )}
                {displayedImages.map((image, index) => (
                    <img
                        src={image}
                        alt={`slide-option-${startIdx + index}`}
                        key={index} onClick={() => selectImage(startIdx + index)}
                        className={`btn-slider-unitech-click ${startIdx + index === currentIndex ? 'unitech-btn-click-active-color' : ''}`}
                    />
                ))}
                {startIdx + 3 < images.length && (
                    <div>
                        <GrFormDown onClick={handleNextSlide2} className='SliderImage-unitech-button-next SliderImage-unitech-button-container Desktop-btnl-slide-productdetails' />
                        <GrFormNext onClick={handleNextSlide2} className='SliderImage-unitech-button-next SliderImage-unitech-button-container mobile-btnl-slide-productdetails' />
                    </div>
                )}
            </div>

            <div className="btn-slider-pre-next">
                <GrFormPrevious
                    onClick={handlePrev}
                    className="SliderImage-unitech-button"
                />
                <GrFormNext
                    onClick={handleNext}
                    className="SliderImage-unitech-button"
                />
            </div>
        </div>
    );
};

export default SlideImages;
