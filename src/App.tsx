import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login, FormValues } from "./components/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import { Error } from "./components/error/Error";
import { authAPI } from "./dall/api";

export type userType = {
  id: number;
  login: string;
};

export const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<userType>();
  const [error, setError] = useState(" ");
  const [isDisabled, setDisabled] = useState(false);
  const loginUser = (values: FormValues) => {
    setDisabled(true);
    authAPI
      .login(values.login, values.password, values.rememberMe)
      .then((res) => {
        setUser(res as userType);
        setIsLogin(true);
        console.log(user);
      })
      .catch((rej) => {
        setError(rej);
        console.log(rej);
      })
      .finally(() => {
        setDisabled(false);
      });
  };

  const logoutUser = (value = "b") => {
    authAPI
      .logout(value)
      .then((res) => setIsLogin(false))
      .catch((err) => console.log(err));
  };

  console.log(isLogin);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile isLogin={isLogin} user={user} logoutUser={logoutUser} />} />
        <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} loginUser={loginUser} error={error} isDisabled={isDisabled} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
