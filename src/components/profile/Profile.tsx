import React from "react";
import { Navigate } from "react-router-dom";
type ProfilePropsType = {
  isLogin: boolean;
};
const Profile = (props: ProfilePropsType) => {
  if (!props.isLogin) {
    return <Navigate to="/login" />;
  }
  return <div>Profile</div>;
};

export default Profile;
