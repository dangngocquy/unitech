import React from "react";
import Product from "../../home/Products/Product";

const Items = ({ currentItems }) => {
  return currentItems.map((item) => (
    <div className="unitech-container-box" key={item.id}>
      <Product {...item} />
    </div>
  ));
};

export default Items;
