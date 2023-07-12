import React from "react";
import NavTitle from "./NavTitle";
import { Link } from 'react-router-dom';
import {
  Apple,
  samsung,
  xiaomi,
  oppo,
  realme,
  nokia,
  oneplus,
  asus,
  vivo,
  techno,
} from '../../../../assets/images';

const Price = () => {
  const priceList = [
    {
      id: 1,
      img: Apple,
      name: "Apple",
      href: "/product/apple",
    },
    {
      id: 2,
      img: samsung,
      name: "Samsung",
      href: "/product/samsung",
    },
    {
      id: 3,
      img: xiaomi,
      name: "Xiaomi",
      href: "/product/xiaomi",
    },
    {
      id: 4,
      img: oppo,
      name: "Oppo",
      href: "/product/oppo",
    },
    {
      id: 5,
      img: realme,
      name: "Realme",
      href: "/product/realme",
    },
    {
      id: 6,
      img: nokia,
      name: "Nokia",
      href: "/product/nokia",
    },
    {
      id: 7,
      img: oneplus,
      name: "Oneplus",
      href: "/product/oneplus",
    },
    {
      id: 8,
      img: asus,
      name: "Asus",
      href: "/product/asus",
    },
    {
      id: 9,
      img: vivo,
      name: "Vivo",
      href: "/product/vivo",
    },
    {
      id: 10,
      img: techno,
      name: "Techno",
      href: "/product/tecno",
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Tìm kiếm theo hãng" icons={false} />
      <div className="Price-containers">
        {priceList.map((item) => (
          <Link to={item.href} key={item.id} className="Price-brand">
            <img src={item.img} alt={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Price;
