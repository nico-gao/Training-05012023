import React from "react";

class Layout extends React.Component {
  render() {
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
            <li onClick={() => this.props.onIndexChange(0)}>Dashboard</li>
            <li onClick={() => this.props.onIndexChange(1)}>Todolist</li>
          </ul>
        </header>
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
