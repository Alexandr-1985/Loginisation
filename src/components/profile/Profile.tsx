import React from "react";
import { Navigate } from "react-router-dom";
import { userType } from "../../App";

type ProfilePropsType = {
  isLogin: boolean;
  user?: userType;
  logoutUser: (value?: string) => void;
};

const Profile = (props: ProfilePropsType) => {
  console.log(props);
  if (!props.isLogin) {
    return <Navigate to="/login" />;
  }

  const logout = () => {
    props.logoutUser();
  };

  return (
    <>
      <div>Hello {props.user?.login}</div>;
      <div>
        <button onClick={logout}>Logout</button>
        <button onClick={() => props.logoutUser("a")}>rej</button>
      </div>
    </>
  );
};

export default Profile;
