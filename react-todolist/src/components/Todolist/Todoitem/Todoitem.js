import React from "react";

import "./Todoitem.css";

class Todoitem extends React.Component {
  render() {
    const { todo, onDelete, onComplete } = this.props;
    return (
      <li className="todoitem">
        <span onClick={() => onComplete(todo)}>{todo.content}</span>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </li>
    );
  }
}

export default Todoitem;
