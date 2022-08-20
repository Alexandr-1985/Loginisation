import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login, FormValues } from "./components/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import { Error } from "./components/error/Error";
import { authAPI } from "./dall/api";

type userType = {
  id: number;
  login: string;
};

export const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<userType>();
  const loginUser = (values: FormValues) => {
    authAPI
      .login(values.login, values.password, values.rememberMe)
      .then((res) => {
        setUser(res as userType);
        console.log(user);
      })
      .catch((rej) => {
        console.log(rej);
      });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile isLogin={isLogin} />} />
        <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} loginUser={loginUser} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
