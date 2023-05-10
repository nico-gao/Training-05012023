// MVC: model view controller
// MVVM: model view view-model

//{firstname:"adam" lastname:"zhou" age:18}
/* 
  http method: 
    get 
    post(creating) body
    put patch body
    delete
  difference between put and patch:
  submit new task: post
  delete a task: delete
  update: put/patch, patch
  get all tasks: get

  static: input, submit button, list container
  dynamic: task list items
*/
//camelcase, skewercase: get-todos
const API = (() => {
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

    const deleteTodo = (id) =>
        fetch(URL + "/" + id, { method: "DELETE" }).then((data) => data.json());
    return {
        getTodos,
        postTodo,
        deleteTodo,
    };
})();

const Model = (() => {
    class State {
        #todos; //[]
        #onChange;
        constructor() {
            this.#todos = [];
        }
        get todos() {
            return this.#todos;
        }
        set todos(newTodos) {
            console.log("setter");
            this.#todos = newTodos;
            //update view
            this.#onChange();
        }
        subscribe(cb) {
            this.#onChange = cb;
        }
    }
    const { getTodos, postTodo, deleteTodo } = API;
    return {
        State,
        getTodos,
        postTodo,
        deleteTodo,
    };
})();

const View = (() => {
    const submitBtnEl = document.querySelector(".submit-btn");
    const inputEl = document.querySelector(".todo-input");
    const todolistEl = document.querySelector(".todolist-container ul");
    const deleteBtnEls = document.querySelectorAll(".delete-btn"); //nodelist
    const getInputValue = () => inputEl.value;

    const renderTodos = (todos) => {
        let todoTemp = "";
        todos.forEach((todo) => {
            const content = todo.content;
            const liTemp = `<li todo-id="${todo.id}"><span>${content}</span><button class="delete-btn" >remove</button></li>`;
            todoTemp += liTemp;
        });
        todolistEl.innerHTML = todoTemp;
    };
    const clearInput = () => inputEl.value = ""
    return {
        submitBtnEl,
        inputEl,
        getInputValue,
        renderTodos,
        todolistEl,
        deleteBtnEls,
        clearInput
    };
})();

/* 
  {content:"do homework"}
*/

const Controller = ((view, model) => {
    const state = new model.State();
    const handleSubmit = () => {
        view.submitBtnEl.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("handleSubmit");
            const inputValue = view.getInputValue();
            const todoObj = { content: inputValue };
            model.postTodo(todoObj).then((data) => {
                state.todos = [data, ...state.todos];
                view.clearInput()
            });
        });
    };

    const handleDelete = () => {
        //event capturing:
        //event bubbling: event will be propagate to its ancestors
        view.todolistEl.addEventListener("click", (event) => {
            if (event.target.className !== "delete-btn") return;
            console.log("delete!");
            const id = event.target.parentNode.getAttribute("todo-id");
            model.deleteTodo(id).then((data) => {
                state.todos = state.todos.filter((item) => item.id !== +id);
            });
        });
    };
    const init = () => {
        model.getTodos().then((data) => {
            data.reverse();
            state.todos = data;
        });
    };
    const bootstrap = () => {
        handleSubmit();
        handleDelete();
        init();
        state.subscribe(() => {
            view.renderTodos(state.todos);
        });
    };
    return {
        bootstrap,
    };
})(View, Model);

Controller.bootstrap();
