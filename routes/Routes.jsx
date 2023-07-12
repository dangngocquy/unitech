import React from "react";
import Home from "../pages/Home/Home";
import Notfound from "../pages/Notfound/Notfound";
import Payment from "../pages/payment/Payment";
import SignUp from "../pages/Account/SignUp";
import SignIn from "../pages/Account/SignIn";
import SearchResultsHeader from "../components/home/Header/SearchResultsHeader";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import LoveList from "../pages/LoveList/LoveList";
import CollectionRenewed from '../pages/CollectionRenewed/CollectionRenewed';
import Cart from "../pages/Cart/Cart";
import data from '../server/data.json';
import ListProduct from "../pages/List/ListProduct";

export const Routers = [
    {
        id: 1,
        path: "/",
        element: <Home paginationItems={data.database}/>
    },
    {
        id: 2,
        path: "/shop",
        element: <Shop />
    },
    {
        id: 3,
        path: "/love",
        element: <LoveList />
    },
    {
        id: 4,
        path: "/thanh-toan",
        element: <Payment />
    },
    {
        id: 5,
        path: "/sign-in",
        element: <SignIn />
    },
    {
        id: 6,
        path: "/sign-up",
        element: <SignUp />
    },
    {
        id: 7,
        path: "/contact",
        element: <Contact />
    },
    {
        id: 8,
        path: "/products/:productName",
        element: <ProductDetails paginationItems={data.database}/>
    },
    {
        id: 9,
        path: "thu-cu",
        element: <CollectionRenewed />
    },
    {
        id: 10,
        path: "/add-to-cart/",
        element: <Cart />
    },
    {
        id: 11,
        path: "/product/xiaomi",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "xiaomi")} />
    },
    {
        id: 12,
        path: "/product/asus",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "asus")} />
    },
    {
        id: 13,
        path: "/product/apple",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "apple")} />
    },
    {
        id: 14,
        path: "/product/acer",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "acer")} />
    },
    {
        id: 15,
        path: "/product/msi",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "msi")} />
    },
    {
        id: 16,
        path: "/product/vivo",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "vivo")} />
    },
    {
        id: 17,
        path: "/product/tecno",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "tecno")} />
    },
    {
        id: 18,
        path: "/product/nokia",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "nokia")} />
    },
    {
        id: 19,
        path: "/product/samsung",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "samsung")} />
    },
    {
        id: 20,
        path: "/product/other",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "khác")} />
    },
    {
        id: 21,
        path: "/product/realme",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "realme")} />
    },
    {
        id: 22,
        path: "/product/oppo",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "oppo")} />
    },
    {
        id: 23,
        path: "/product/oneplus",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.brand && itemBrand.brand.toLowerCase() === "oneplus")} />
    },
    {
        id: 24,
        path: "/product/smart-home",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.type && itemBrand.type.toLowerCase() === "smart home")} />
    },
    {
        id: 25,
        path: "/product/accessory",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.type && itemBrand.type.toLowerCase() === "phụ kiện")} />
    },
    {
        id: 26,
        path: "/product/other-private",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.type && itemBrand.type.toLowerCase() === "khác")} />
    },
    {
        id: 27,
        path: "/product/laptop-pc",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.type && itemBrand.type.toLowerCase() === "laptop, máy tính")} />
    },
    {
        id: 28,
        path: "/product/phone-tablet",
        element: <ListProduct datas={data.database.filter((itemBrand) => itemBrand.type && itemBrand.type.toLowerCase() === "điện thoại, tablet")} />
    },
    {
        id: 29,
        path: "*",
        element: <Notfound />
    },
    {
        id: 30,
        path: "/search",
        element: <SearchResultsHeader />
    }
];