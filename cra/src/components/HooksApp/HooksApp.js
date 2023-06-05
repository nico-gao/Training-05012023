import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";


// component 1 => counter 0
// click alert button, then click add one
// component 2 => counter 1
// after 3s => alert(counter) => 0

const fetchCounter = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(100);
    }, 2000);
  });
};

const withCounter = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    state = {
      counter: 0,
    };

    componentDidMount() {
      fetchCounter().then((data) => {
        this.setState({ counter: data });
      });
    }

    handleAddOne = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleAddOne={this.handleAddOne}
        />
      );
    }
  };
};

// let counterState;

// custom hook
const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCounter()
      .then((data) => {
        setCounter(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [counter, setCounter, loading];
};

export const HooksApp = () => {
  // const results = useState(0);
  // const result = result[0];
  // const setResult = result[1];
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(true);
  const counterRef = useRef(counter);
  counterRef.current = counter; // ref is mutable, it won't trigger re-render

  const foo = useCallback(
    (counter) => {
      // doing some expensive calculation

      return 1 + counter;
    },
    [counter]
  );

  const fnRef = useRef(foo);

  console.log(foo === fnRef.current);

  const a = useMemo(() => {
    return {
      name: value ? "nicole" : "adam",
    };
  }, [value]);

  const objRef = useRef(a);
  console.log(a === objRef.current);

  // componentDidMount || componentDidUpdate
  // useEffect(() => {
  //   // console.log(document.querySelector(".hooks-section"));
  //   console.log("in useEffect");
  //   fetchCounter().then((data) => {
  //     setCounter(data);
  //   });
  // });

  // componentDidMount
  useEffect(() => {
    // console.log(document.querySelector(".hooks-section"));
    console.log("in useEffect");
    fetchCounter().then((data) => {
      setCounter(data);
    });
  }, []);

  // componentDidUpdate when variables in the dependency array change
  useEffect(() => {
    // console.log(document.querySelector(".hooks-section"));
    console.log("counter updated");
  }, [counter]);

  // 1st useEffect is called -> call the callback fn // step 1
  // state update -> trigger useEffect again
  // the clean up function will be called to do the cleanup for step 1
  // 2nd useEffect is called call the callback fn // step 4
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("interval", counter);
  //   }, 1000);

  //   // componentWillUnmount
  //   return () => {
  //     // cleanup
  //     clearInterval(intervalID);
  //   };
  // }, [counter]);

  return (
    <section className="hooks-section">
      <h1>Hooks App</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add one</button>
      <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        Alert in 3s
      </button>
      <button onClick={() => setValue(!value)}>Toggle Value</button>
    </section>
  );
};

export const HooksApp2 = (props) => {
  // const { counter, handleAddOne } = props;
  const [counter, setCounter, loading] = useCounter(0);
  // const results = useState(0);
  // const result = result[0];
  // const setResult = result[1];

  // componentDidMount || componentDidUpdate
  // useEffect(() => {
  //   // console.log(document.querySelector(".hooks-section"));
  //   console.log("in useEffect");
  //   fetchCounter().then((data) => {
  //     setCounter(data);
  //   });
  // });

  // componentDidUpdate when variables in the dependency array change
  useEffect(() => {
    // console.log(document.querySelector(".hooks-section"));
    console.log("counter updated");
  }, [counter]);

  return (
    <section className="hooks-section">
      <h1>Hooks App</h1>
      {loading ? <p>is loading...</p> : <p>Counter: {counter}</p>}

      {/* <button onClick={handleAddOne}>Add one</button> */}
      <button onClick={() => setCounter(counter + 1)}>Add one</button>
      {/* <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        Alert in 3s
      </button> */}
    </section>
  );
};

export class ClassApp extends React.Component {
  // state = {
  //   counter: 0,
  // };

  render() {
    const { counter, handleAddOne } = this.props;
    return (
      <section>
        <h1>Class App</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => this.setState(handleAddOne)}>Add one</button>
        {/* <button
          onClick={() => {
            setTimeout(() => {
              alert(this.state.counter);
            }, 3000);
          }}
        >
          Alert in 3s
        </button> */}
      </section>
    );
  }
}

// const withTest = () => {};
export const WrappedComponent = withCounter(ClassApp);
// export const WrappedHooksComponent = withCounter(HooksApp2);
