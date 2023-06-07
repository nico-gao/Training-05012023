import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MyLink from "../router/MyLink";

const Layout = ({ children }) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   setTimeout(() => {
  //     const number = Math.floor(Math.random() * 10);
  //     navigate(`/test/${number}`);
  //   }, 2000);
  // };
  // render() {
  return (
    <>
      <header>
        <ul
          style={{
            backgroundColor: "bisque",
            display: "flex",
            alignItems: "center",
            height: "30px",
            gap: "20px",
            listStyle: "none",
            cursor: "pointer",
          }}
        >
          {/* <li onClick={() => this.props.onIndexChange(0)}>Dashboard</li>
            <li onClick={() => this.props.onIndexChange(1)}>Todolist</li> */}
          <li>
            <MyLink to="/">Dashboard</MyLink>
          </li>
          <li>
            <MyLink to="/todo">Todolist</MyLink>
          </li>
          {/* <li>
            <NavLink
              to="/test/test2"
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
            >
              {({ isActive }) => {
                return isActive ? "Test2 is active" : "Test2";
              }}
            </NavLink>
          </li>
          <li>
            <a onClick={handleClick}>Random ID</a>
          </li>  */}
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
};
// }

export default Layout;
