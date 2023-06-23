import React, { Fragment } from "react";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import PageLayout from "./components/pageLayout/PageLayout";
function App() {
  const admin = () => {
    if (
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.isAdmin
    ) {
      return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.isAdmin;
    } else {
      return false;
    }
  };
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          {admin && (
            <>
              <Route path="/" element={<PageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newProduct" element={<NewProduct />} />
              </Route>
            </>
          )}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
