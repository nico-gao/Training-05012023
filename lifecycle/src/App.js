import React, { createElement } from "react";
import "./App.css";

class Header extends React.Component {
  render() {
    console.log("Header render");
    return <h1>Header</h1>;
  }
}

class Content extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

class Clock extends React.Component {
  state = {
    clock: new Date().toLocaleTimeString(),
    intervalId: null,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log("clock updating...");
      this.setState({
        clock: new Date().toLocaleTimeString(),
      });
    }, 1000);
    this.setState({
      intervalId,
    });
  }

  // do cleanup before the component is unmounted
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <p>Current time: {this.state.clock}</p>;
  }
}

class Counter extends React.Component {
  componentDidMount() {
    console.log("Counter componentDidMount");
  }

  componentWillUnmount() {
    console.log("================Unmouting Stage=================");
    console.log("Counter componentWillUnmount");
  }
  render() {
    return <p>{this.props.counter}</p>;
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    console.log("Layout constructor");
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Layout getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    // console.log(document.getElementById("app"));
    console.log("Layout componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Layout shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Layout getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Layout componentDidUpdate");
  }

  render() {
    console.log("Layout render");

    return (
      <div>
        <Header />
        <Content>{this.props.children}</Content>
      </div>
    );
  }
}

class App extends React.Component {
  // initialization for state and props, bind event handlers
  constructor() {
    super();
    this.state = {
      counter: 0,
      show: true,
    };
    console.log("================Mouting Stage=================");

    console.log("App constructor");
  }

  state = {};

  static getDerivedStateFromProps(props, state) {
    console.log("================Mouting/Updating Stage=================");

    console.log("App getDerivedStateFromProps");
    return null;
  }

  // access the DOM, API calls
  componentDidMount() {
    // console.log(document.getElementById("app"));
    console.log("App componentDidMount");
  }

  // returns a boolean value, determine if the component needs to be re-rendered
  shouldComponentUpdate() {
    console.log("App shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("App getSnapshotBeforeUpdate");
    return null;
  }

  // do update or cleanup or ...
  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  handleUpdate = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleHide = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    // console.log(document.getElementById("root"));
    // console.log(document.getElementById("app"));
    console.log("App render");

    return (
      <div id="app">
        <Layout>
          {this.state.show ? (
            <>
              <Counter counter={this.state.counter} />
              <Clock />
            </>
          ) : (
            <p>Not showing</p>
          )}
          <button onClick={this.handleUpdate}>Update</button>
          <button onClick={this.handleHide}>Hide</button>
        </Layout>
      </div>
    );
  }
}

export default App;
