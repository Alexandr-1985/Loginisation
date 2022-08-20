import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import { Error } from "./components/error/Error";

export const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile isLogin={isLogin} />} />
        <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
