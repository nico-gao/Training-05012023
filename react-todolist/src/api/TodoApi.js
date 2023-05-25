const URL = "http://localhost:3000/todos";

const getTodos = () => fetch(URL).then((data) => data.json());

const postTodo = (todo) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};

const updateTodo = (todo) => {
  return fetch(URL + `/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};

const deleteTodo = (id) =>
  fetch(URL + "/" + id, { method: "DELETE" }).then((data) => data.json());

export { getTodos, postTodo, deleteTodo, updateTodo };
