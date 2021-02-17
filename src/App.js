import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const TodoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__todoContainer">
          {TodoList.map((todo, index) => {
            return <TodoItem key={index} todo={todo} />;
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
