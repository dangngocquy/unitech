import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import data from '../../server/data.json';
import Product from "../../components/home/Products/Product";

function ProductRecommendation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transition, setTransition] = useState(false);
    const [discountedItems, setDiscountedItems] = useState([]);
    const [showButtons, setShowButtons] = useState(true);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        const updatedDiscountedItems = data.database.filter((item) => {
            const originalPrice = parseFloat(item.flash.replace(/[^\d]/g, ""));
            const salePrice = parseFloat(item.pricePlus.replace(/[^\d]/g, ""));
            const discountPercentageValue = ((originalPrice - salePrice) / originalPrice) * 100;
            const roundedDiscountPercentage = Math.abs(discountPercentageValue).toFixed(0);
            return roundedDiscountPercentage >= 10;
        });

        setDiscountedItems(updatedDiscountedItems);
        setCurrentSlide(0);
        setShowButtons(updatedDiscountedItems.length > 5);

        if (updatedDiscountedItems.length > 5) {
            setAutoplay(true);
        } else {
            setAutoplay(false);
        }
    }, []);

    const previousSlide = () => {
        setTransition(true);
        setCurrentSlide(
            currentSlide === 0 ? discountedItems.length - 1 : currentSlide - 1
        );
    };

    const nextSlide = () => {
        setTransition(true);
        setCurrentSlide((currentSlide + 1) % discountedItems.length);
    };

    const handleTransitionEnd = () => {
        setTransition(false);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                setTransition(true);
                setCurrentSlide((currentSlide + 1) % discountedItems.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [autoplay, currentSlide, discountedItems.length]);
    return (
        <div className="unitech-ProductRecommendation-container">
            <div className="FlashSale-containers">
                <div className="unity-container">
                    {showButtons && (
                        <>
                            <GrFormPrevious className="slider__button--previous" onClick={previousSlide} />
                            <GrFormNext className="slider__button--next" onClick={nextSlide} />
                        </>
                    )}
                    <div
                        className={`unitech-containers-categories slider-sale__container ${transition ? "" : ""}`}
                        style={{ transform: `translateX(-${currentSlide * (100 / discountedItems.length)}%)` }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {discountedItems.map((product, index) => (
                            <div
                                key={index}
                                className={`slide__product${index === currentSlide ? " active" : ""}`}
                            >
                                <Product {...product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductRecommendation;