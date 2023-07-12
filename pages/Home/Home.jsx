import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sale />
      <BannerBottom />
      <NewArrivals />
    </div>
  );
};

export default Home;
