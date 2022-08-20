import React from "react";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
type ProfilePropsType = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};
export const Login = (props: ProfilePropsType) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const onClickHandler = () => {
    // authAPI.login(values.login, values.password).then();
    // props.setIsLogin(!props.isLogin);
  };
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (props.isLogin) {
    return <Navigate to="/profile" />;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">Login</label>
      <input id="login" name="login" type="login" onChange={formik.handleChange} value={formik.values.login} />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
      <button onClick={onClickHandler} type="submit">
        Submit
      </button>
    </form>
  );
};
