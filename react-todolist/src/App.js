import React from "react";
import "./App.css";
import Todolist from "./components/Todolist/Todolist";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Test } from "./components/Test/Test";
import Test2 from "./components/Test/Test2";
import TestNav from "./components/Test/TestNav";
import MyRoute from "./components/router/MyRoute";
import MyRoutes from "./components/router/MyRoutes";

/**
 * spa, navigation won't cause refreshing
 * use url to navigate to a specific page
 * allows us to have access to the history feature
 *
 *
 * history
 * pushState()
 * replaceState()
 * forward()
 * back()
 * go()
 *
 * location
 * assign()
 * reload()
 * replace()
 */

const App = () => {
  // state = {
  //   index: 0,
  // };

  // handleIndexChange = (index) => {
  //   this.setState({
  //     index,
  //   });
  // };

  // render() {
  //   let content = null;
  //   switch (this.state.index) {
  //     case 0:
  //       content = <Dashboard />;
  //       break;
  //     case 1:
  //       content = <Todolist />;
  //   }
  return (
    <div className="app">
      <Layout>
        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/todo" element={<Todolist />} />
          <Route path="/test" element={<TestNav />}>
            <Route index element={<h1>Test Home</h1>} />
            <Route path=":id" element={<Test />} />
            <Route path="test2" element={<Test2 />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes> */}
        <MyRoutes>
          <MyRoute path="/" element={<Dashboard />} />
          <MyRoute path="/todo" element={<Todolist />} />
        </MyRoutes>
      </Layout>
    </div>
  );
  // }
};

export default App;
