import React from "react";
import { actionCreator } from "../routes/store";
import { connect } from "react-redux";

function ToDo({ text, deleteTodo }) {

  return (
    <li>
      {text}
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
