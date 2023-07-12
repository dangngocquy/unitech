import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locationPath, setLocationPath] = useState("");
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
    if (prevLocation === "" && location.pathname.split("/")[1] === "Trang chủ") {
      setHistoryList(prevHistory => [...prevHistory, location.pathname]);
    }
  }, [location, prevLocation]);  

  const handleHistoryClick = (path) => {
    navigate(path);
  };

  const handleHistoryClicks = () => {
    navigate("/");
  };

  return (
    <div className="mobile-scrolllink">
      <div className="Breadcrumbs-containers">
        <h1 onClick={handleHistoryClicks}><AiOutlineHome/>Trang chủ</h1>
        <HiOutlineChevronRight />
        <span onClick={() => handleHistoryClick(historyList[historyList.length - 1])}>
          {prevLocation === "" ? "Trang chủ" : prevLocation}
        </span>
        <HiOutlineChevronRight />
        <p>{locationPath}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
