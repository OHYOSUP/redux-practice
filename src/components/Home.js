import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { actionCreator } from "../routes/store";
import ToDo from "./ToDo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addTodo(text);
    setText("");
  };

  // const todo = useSelector(state => state)

  // console.log(todo)

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos?.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreator.addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
