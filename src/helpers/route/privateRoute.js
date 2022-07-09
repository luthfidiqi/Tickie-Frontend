import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function PrivateRoute(props) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  // const dataUser = useSelector((state) => state.user.data);

  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (props.isAdmin && dataUser?.role !== "admin") {
    // true | true
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

// PrivateRoute.propTypes = {
//   isAdmin: PropTypes.bool
// };
