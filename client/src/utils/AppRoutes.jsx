import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

import Home from "../screens/home/Home";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import Write from "../screens/write/Write";
import Settings from "../screens/settings/Settings";
import Single from "../screens/single/Single";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import ErrorPage from "../screens/errorPage/ErrorPage";

const AppRoutes = () => {
  const { user } = useContext(Context);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/write" element={<Write />} />
      <Route path="/settings" element={user ? <Settings /> : <Home />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
