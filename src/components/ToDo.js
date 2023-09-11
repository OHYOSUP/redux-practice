import React from "react";
import { actionCreator } from "../routes/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, id, deleteTodo }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
        <button onClick={deleteTodo}>DELETE</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodo: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
