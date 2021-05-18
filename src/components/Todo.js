import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const Todo = ({ todo }) => {
  return (
    <div>
      <li>
        {" "}
        <CreateIcon />
        {todo.title} <DeleteIcon />{" "}
      </li>
    </div>
  );
};

export default Todo;
