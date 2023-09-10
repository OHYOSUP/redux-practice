const todoForm = document.querySelector("form")
const todoInput = document.querySelector("input")
const todoList = document.querySelector("ul")

const createTodo = (value)=>{
  const li = document.createElement('li')
  li.innerText = value
  todoList.appendChild(li)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  const value = todoInput.value
  todoInput.value= ""
  console.log(value)
  createTodo(value)
}


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
