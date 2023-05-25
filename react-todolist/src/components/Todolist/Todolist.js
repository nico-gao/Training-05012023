import React from "react";
import { deleteTodo, getTodos, postTodo, updateTodo } from "../../api/TodoApi";
import Todoitem from "./Todoitem/Todoitem";

import "./Todolist.css";
import { withTodos } from "../../hoc/withTodos";

class Todolist extends React.Component {
  state = {
    // todos: [],
    inputValue: "",
    // completed: [],
    // pending: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      content: this.state.inputValue,
      completed: false,
    };
    postTodo(newTodo).then((todo) => {
      this.setState({
        todos: [...this.state.todos, todo],
        inputValue: "",
      });
    });
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleDelete = (id) => {
    deleteTodo(id).then(() => [
      this.setState({
        todos: this.state.todos.filter((todo) => id !== todo.id),
      }),
    ]);
  };

  handleComplete = (todo) => {
    console.log("complete");
    updateTodo({ ...todo, completed: !todo.completed }).then((res) => {
      this.setState({
        todos: this.state.todos.map((item) => {
          if (item.id === res.id) {
            return { ...res };
          } else {
            return item;
          }
        }),
      });
    });
  };

  render() {
    const { todos } = this.props;
    const pendingTodos = todos.filter((todo) => todo.completed === false);
    const completedTodos = todos.filter((todo) => todo.completed === true);

    return (
      <div className="todolist">
        <form>
          {/* two way binding */}
          <input
            className="todo-input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button className="submit-btn" onClick={this.handleSubmit}>
            submit
          </button>
        </form>
        <ul className="todolist-list">
          <p>Pending</p>
          {pendingTodos.map((todo) => (
            <Todoitem
              key={todo.id}
              todo={todo}
              onDelete={this.handleDelete}
              onComplete={this.handleComplete}
            />
          ))}
        </ul>
        <ul className="todolist-list">
          <p>Completed</p>
          {completedTodos.map((todo) => (
            <Todoitem
              key={todo.id}
              todo={todo}
              onDelete={this.handleDelete}
              onComplete={this.handleComplete}
            />
          ))}
        </ul>
      </div>
    );
  }

  // componentDidMount() {
  //   getTodos().then((todos) => {
  //     this.setState({
  //       todos,
  //     });
  //   });
  // }
}

export default withTodos(Todolist);
