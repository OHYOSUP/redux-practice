const { createStore } = require("redux");
const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
const todoList = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (value) => {
  return {
    type: ADD_TODO,
    text: value,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const dispatchAddTodo = (value) => {
  store.dispatch(addTodo(value));
};
const dispatchDeleteTodo = (e) => {
  
  const id = e.target.parentNode.id;
  console.log(id)
  store.dispatch(deleteTodo(id));
};

const reducer = (state = [], action) => {    
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(todo => Number(todo.id) !== Number(action.id));
    default:
      return state;
  }
};
const store = createStore(reducer);

// const deleteTodo = (e) => {
//   const id = e.target.parentNode.id;
//   dispatchDeleteTodo(id);
//   console.log(e.target.parentNode.id);
// };



const paintTodo = () => {
  const todos = store.getState();  
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    btn.innerText = "DEL";
    li.appendChild(btn);
    todoList.appendChild(li);
  });
};

store.subscribe(paintTodo);

const handleSubmit = (e) => {
  e.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  dispatchAddTodo(value);
};

todoForm.addEventListener("submit", handleSubmit);

// import { createStore } from "redux";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const minus = document.getElementById("minus");
// const plus = document.getElementById("plus");
// const span = document.querySelector("span");

// span.innerHTML = 0;

// const ADD = "ADD"
// const MINUS = "MINUS"

// const reducer = (count = 0, action) => {
//   console.log(count, action);

//   switch(action.type){
//     case ADD:
//       return count +1
//     case MINUS:
//       return count -1
//     default:
//       return count
//   }

// };

// const store = createStore(reducer);

// const onChange = () => {
//   span.innerHTML = store.getState();
// };

// store.subscribe(onChange);

// const handlePlus = () => {
//   store.dispatch({ type: ADD });
// };

// const handleMinus = () => {
//   store.dispatch({ type: MINUS });
// };

// plus.addEventListener("click", handlePlus);
// minus.addEventListener("click", handleMinus);

// console.log(store.getState());
// let number = 0;

// span.innerText = number;

// const updateNumber = () => {
//   span.innerText = number;
// };

// const handleMinus = () => {
//   number = number - 1;
//   updateNumber();
// };
// const handlePlus = () => {
//   number = number + 1;
//   updateNumber();
// };

// minus.addEventListener("click", handleMinus);
// plus.addEventListener("click", handlePlus);
