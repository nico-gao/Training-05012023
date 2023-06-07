import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyLink = ({ children, to }) => {
  const { forceUpdate } = useContext(RouterContext);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(window.history);
    // window.location.href = to;
    window.history.pushState({}, null, to);

    forceUpdate();
  };
  return <a onClick={handleClick}>{children}</a>;
};

export default MyLink;
