import React, { useContext, useEffect } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyRoutes = ({ children }) => {
  const { forceUpdate } = useContext(RouterContext);
  useEffect(() => {
    const handlePopstate = () => {
      console.log("pop state");
      forceUpdate();
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return <>{children}</>;
};

export default MyRoutes;
