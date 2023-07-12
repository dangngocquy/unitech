import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import { Routers } from './routes/Routes';
import { NotificationProvider, NotificationContext } from "./components/home/Products/NotificationContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Create from "./components/dashboard/admin/Create";
import Main from './components/dashboard/main/Main';
import OrderList from "./components/dashboard/OrderList";
import ListPost from './components/dashboard/ListPost/ListPost';
import Edit from './components/dashboard/admin/Edit';
import BackToTopButton from './pages/Home/BackToTop';
import LoginAdmin from "./components/dashboard/Auth/LoginAdmin";
import { isAuthenticated } from "./components/dashboard/Auth/Auth";

const Layout = () => {
  const { notify } = useContext(NotificationContext);
  return (
    <div>
      <Header />
      <HeaderBottom />
      {notify}
      <Outlet />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

function App() {
  return (
    <div className="font-bodyFont">
      <NotificationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {Routers.map((route) => (
                <Route key={route.id} path={route.path} element={route.element}></Route>
              ))}
            </Route>

            <Route
              path="/auth/dashboard"
              element={
                isAuthenticated() ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/Dashboard/login" replace />
                )
              }
            >
              <Route path="/auth/dashboard" element={<Main />} />
              <Route path="post" element={<Create />} />
              <Route path="list-post" element={<ListPost />} />
              <Route path="order-list" element={<OrderList />} />
              <Route path="list-post/edit/:id" element={<Edit />} />
            </Route>

            <Route path="/Dashboard/login" element={<LoginAdmin />} />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
