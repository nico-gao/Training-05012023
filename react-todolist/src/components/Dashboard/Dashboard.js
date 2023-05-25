import React from "react";
import { getTodos } from "../../api/TodoApi";
import { withTodos } from "../../hoc/withTodos";

class Dashboard extends React.Component {
  state = {
    totalTodo: 0,
    totalCompletedTodo: 0,
  };
  render() {
    const { todos } = this.props;
    const totalTodo = todos.length;
    const totalCompletedTodo = todos.filter(
      (todo) => todo.completed === true
    ).length;

    return (
      <div>
        <p>Total number of todos: {totalTodo}</p>
        <p>Total number of completed todos: {totalCompletedTodo}</p>
      </div>
    );
  }

  // componentDidMount() {
  //   getTodos().then((todos) => {
  //     this.setState({
  //       totalTodo: todos.length,
  //       totalCompletedTodo: todos.filter((todo) => todo.completed === true)
  //         .length,
  //     });
  //   });
  // }
}

export default withTodos(Dashboard);
