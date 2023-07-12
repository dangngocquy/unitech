import React from "react";
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { TbExclamationMark } from "react-icons/tb";

const Notification = ({ type, content }) => {
  let bgColor;
  let icon;

  switch (type) {
    case "success":
      bgColor = "#32a846";
      icon = <BsCheck size={23} className="icon-cart-no" />;
      break;
    case "error":
      bgColor = "#d9534f";
      icon = <IoIosClose size={23} className="icon-cart-no" />;
      break;
    case "warning":
      bgColor = "#f08d3c";
      icon = <TbExclamationMark size={23} className="icon-cart-no" />;
      break;
    default:
      bgColor = "transparent";
      icon = null;
  }

  return (
    <div className={`Unitech-Notification`} style={{ backgroundColor: bgColor }}>
      <span>{icon}</span>
      <div className="Unitech-Notification-text">{content}</div>
    </div>
  );
};

export default Notification;
