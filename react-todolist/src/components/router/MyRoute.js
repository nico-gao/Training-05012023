import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyRoute = ({ path, element }) => {
  const { state } = useContext(RouterContext);
  if (window.location.pathname === path) {
    console.log(window.location.pathname, path);
    return element;
  }
  return null;
};

export default MyRoute;
