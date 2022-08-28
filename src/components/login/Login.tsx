import React from "react";
import { FormikErrors, useFormik } from "formik";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css";
import { authAPI } from "../../dall/api";
type ProfilePropsType = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  loginUser: (values: FormValues) => void;
  error: string;
  isDisabled: boolean;
};
export type FormValues = {
  login: string;
  password: string;
  rememberMe?: boolean;
};
export const Login = (props: ProfilePropsType) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const onClickHandler = () => {
    // props.setIsLogin(!props.isLogin);
  };
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      rememberMe: false,
    },
    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormValues> = {};
      if (!values.login) {
        errors.login = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
        errors.login = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 4) {
        errors.password = "Invalid password";
      }

      return errors;
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      //debugger;
      /*1 variant  let login = values.login;
      let password = values.password;
      let rememberMe = values.rememberMe;

      authAPI.login(login, password, rememberMe);*/

      props.loginUser(values);
      formik.resetForm();
    },
  });

  if (props.isLogin) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="login">Login</label>
        <input id="login" name="login" type="login" onChange={formik.handleChange} value={formik.values.login} />
        {formik.errors.login && formik.touched.login ? <div className={s.error}>{formik.errors.login}</div> : null}
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password && formik.touched.password ? <div className={s.error}>{formik.errors.password}</div> : null}
        <button onClick={onClickHandler} type="submit" disabled={props.isDisabled}>
          Submit
        </button>
      </form>
      <div>{props.error && props.error}</div>
    </div>
  );
};
