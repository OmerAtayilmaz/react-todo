import React, { useEffect, useState,useContext } from "react";
import AddNewTodo from "./AddNewTodo";
import { TodoListContext } from "../contexts/TodoListContext";
const TodoList = () => {
  const {todos}=useContext(TodoListContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use effect for todos", todos);
  }, [todos]);
  useEffect(() => {
    console.log("use effect for counter", count);
  }, [count]);
  return (
    <div className="ui container">
      <div className="ui middle aligned selection list centered">
        {todos.length?todos.map((todo) => (
          <div className="item" key={todo.id}>
            <div className="content">
              <div className="header">
                <i className="fas fa-check-circle fa-sm"></i>
                <span>{todo.text}</span>
              </div>
            </div>
          </div>
        )):<h4>You don't have any todo!</h4>}
        <AddNewTodo />
        <div className="ui labeled button container-counter" tabIndex="0">
          <div className="ui green button " onClick={() => setCount(count + 1)}>
            <i className="fas fa-check"></i> Completed
          </div>
          <a className="ui basic green left pointing label">{count}</a>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
