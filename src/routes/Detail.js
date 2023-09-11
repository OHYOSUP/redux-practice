import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ todo }) {
  const { id } = useParams();
  const currentTodo = todo.find((todo) => todo.id === Number(id));
  return (
    <>
      <h1>{currentTodo.text}</h1>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state };
};

export default connect(mapStateToProps)(Detail);
