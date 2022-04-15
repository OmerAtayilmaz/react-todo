import React,{createContext,useState} from 'react';
export const TodoListContext=createContext();

const TodoListContextProvider=({children})=>{
    const [todos,setTodos]=useState([
        {text:"Plan the family trip",id:1},
        {text:"Go shopping for dinner", id:3} ,
        {text:"Go for walk",id:2} 
    ])
    return <TodoListContext.Provider value={{todos}}>{children}</TodoListContext.Provider>
}

export default TodoListContextProvider;