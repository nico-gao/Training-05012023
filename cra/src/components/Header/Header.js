import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <>
        <h1 className={styles["header"]}>{title}</h1>
        <button
          onClick={() => {
            handleChange("hello");
          }}
        >
          update message
        </button>
      </>
    );
  }
}

export default Header;
