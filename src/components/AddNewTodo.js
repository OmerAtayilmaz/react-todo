import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todos);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="ui centered action input">
        <input
          type="text"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          placeholder="Add..."
        />
        <button type="submit" className="ui primary button">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddNewTodo;
