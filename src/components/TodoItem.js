import React from "react";
import { Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChecked } from "../features/todoSlice";

import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const { item, done, id } = todo;
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setChecked(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{item}</p>
    </div>
  );
};

export default TodoItem;
