import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreator } from "./store";

function Detail({ todo, deleteTodo }) {
  const { id } = useParams();
  const currentTodo = todo.find((todo) => todo.id === Number(id));
  return (
    <>
      <h1>{currentTodo?.text}</h1>
      <button onClick={deleteTodo}>DEL</button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    deleteTodo: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
