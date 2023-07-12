import React, { useState } from "react";
import { BsTrash, BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteItem, drecreaseQuantity, increaseQuantity } from "../../redux/orebiSlice";
import Notification from "../../components/designLayouts/Notification";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {

  function createSlug(str) {
    if (!str) return ""; // Kiểm tra xem str có là undefined hoặc null không
    const slug = str
      ? str
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()
      : "";
    return slug;
  }

  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDecreaseQuantity = () => {
    dispatch(drecreaseQuantity({ id: item.id }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id: item.id }));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem(item.id));
    setShowSuccessMessage(true);
    // Removed the timeout function as it is not necessary
    setTimeout(() => {
    setShowSuccessMessage(false);
    }, 3000);
  };

  // Added the useEffect hook to hide the success message after 3 seconds
  React.useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  return (
    <div key={item.id}>
      <div className="ItemCard-container">
        <div className="flex-Itemcart">
          <Link to={`/products/${createSlug(item.name)}`}>
            <img src={item.image} alt="productImage" />
          </Link>
          <div className="unitech-ItemCard-close">
            <p>{item.type}</p>
            <Link to={`/products/${createSlug(item.name)}`}>
              <h1>{item.name}</h1>
            </Link>
            <b>{item.pricePlus}</b>
            <div style={{ backgroundColor: item.color }} className="border-color"></div>
            <div className="ItemCard-container-flex">
              <HiMinus onClick={handleDecreaseQuantity} className="button-up" />
              <p>{item.quantity}</p>
              <BsPlus onClick={handleIncreaseQuantity} className="button-up" />
            </div>
          </div>
        </div>
        <div className="box-flex-unitech">
          <BsTrash onClick={handleDeleteItem} size={25} className="NumberPhone" />
        </div>
      </div>
      {showSuccessMessage && <Notification type="success" content="Xóa thành công!" />}
      <div className="ItemCard-border-botoom"></div>
    </div>
  );
};

export default ItemCard;