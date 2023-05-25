import React from "react";
import "./App.css";
import Todolist from "./components/Todolist/Todolist";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";

class App extends React.Component {
  state = {
    index: 0,
  };

  handleIndexChange = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    let content = null;
    switch (this.state.index) {
      case 0:
        content = <Dashboard />;
        break;
      case 1:
        content = <Todolist />;
    }
    return (
      <div className="app">
        <Layout onIndexChange={this.handleIndexChange}>{content}</Layout>
      </div>
    );
  }
}

export default App;
