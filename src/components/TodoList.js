import React, { useEffect, useState,useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
const TodoList = () => {
  const [todo,setTodo]=useState();
  const {todos,dispatch}=useContext(TodoListContext);
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    dispatch({type:'ADD_TODO',text:todo})
  }
  const handleRemoveTodo=(e)=>
    dispatch({type:'REMOVE_TODO',id:e.target.id})
  const handleCompleteTodo=(e)=>{
    dispatch({type:'COMPLETE_TODO',id:e.target.id});
    console.log(e.target.id);
  }
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
                <button className="ui green button" id={todo.id} onClick={handleCompleteTodo} ><i className="fas fa-fire icon-done"></i>Done</button>
                <button className="ui red button" id={todo.id} onClick={handleRemoveTodo} ><i className="fas fa-trash icon-done"></i>Remove</button>
                </div>
              </div>

            </div>
          </div>
        )):<h4>You don't have any todo!</h4>}

        <div className="container-footer">
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
        <div className="right-side">
        <div className="ui labeled button container-counter" tabIndex="0">
          <div className="ui green button ">
            <i className="fas fa-check"></i> Completed
          </div>
          <a className="ui basic green left pointing label">{todos.reduce((prev,current)=>current.status&&prev+1,0)}</a>
        </div>
        <div className="ui labeled button container-counter" tabIndex="0">
          <div className="ui red button ">
          <i className="fas fa-trash"></i> Trash
          </div>
          <a className="ui basic red left pointing label">1</a>
        </div>
        </div>
        </div>
       
       
      </div>
    </div>
  );
};
export default TodoList;
