import React,{createContext,useState} from 'react';
import uniqid from 'uniqid';

export const TodoListContext=createContext();

const TodoListContextProvider=({children})=>{
    const [todos,setTodos]=useState([
        {text:"Plan the family trip",id:1},
        {text:"Go shopping for dinner", id:3} ,
        {text:"Go for walk",id:2} 
    ]);
    const [completedTodos,setCompletedTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos([
            ...todos,
            {text:todo,id:uniqid()}]);
    };

    const removeTodo=(id)=>{
        setTodos(todos.filter(todo=>{
            if(!todo.id!=id)
                setCompletedTodos([...completedTodos,todo])
            
            return todo.id!=id;
        }));
    }
    
    return <TodoListContext.Provider value={{todos,completedTodos,addTodo,removeTodo,}}>{children}</TodoListContext.Provider>
}

export default TodoListContextProvider;