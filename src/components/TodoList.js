import React, { useEffect, useState,useContext } from "react";
import AddNewTodo from "./AddNewTodo";
import { TodoListContext } from "../contexts/TodoListContext";
const TodoList = () => {
  const [todo,setTodo]=useState();
  const {todos,addTodo,completedTodos,removeTodo,}=useContext(TodoListContext);
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    addTodo(todo);
  }
  const handleRemoveTodo=(e)=>
    removeTodo(e.target.id);
  
  useEffect(() => {
    //console.log("use effect for todos", todos);
  }, [todos]);
  useEffect(() => {
    //console.log("use effect for counter", count);
  }, [count]);
  return (
    <div className="ui container">
      <div className="ui middle aligned selection list centered">
        {todos.length?todos.map((todo) => (
          <div className="item" key={todo.id}>
            <div className="content">
              <div className="header">
                <div>
                <i className="fas fa-check-circle fa-sm"></i>
                <span>{todo.text}</span>
                </div>
                <div>
                  
                <button className="ui green button" id={todo.id} onClick={handleRemoveTodo} ><i className="fas fa-fire icon-done"></i>Done</button>
                </div>
              </div>

            </div>
          </div>
        )):<h4>You don't have any todo!</h4>}
         <form onSubmit={handleFormSubmit}>
            <div className="ui centered action input">
            <input
              type="text"
              placeholder="Add..."
              onChange={handleChange}
            />
            <button type="submit"  className="ui primary button">
              Add Todo
            </button>
             </div>
        </form>
        <div className="ui labeled button container-counter" tabIndex="0">
          <div className="ui green button ">
            <i className="fas fa-check"></i> Completed
          </div>
          <a className="ui basic green left pointing label">{completedTodos.length}</a>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
