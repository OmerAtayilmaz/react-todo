import React,{createContext,useState,useReducer} from 'react';
import uniqid from 'uniqid';

export const TodoListContext=createContext();
const todosReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state, { id:uniqid(), text:action.text,status:0 } ]
        case 'REMOVE_TODO':
            return state.filter((todo)=> todo.id!==action.id );
        default: 
            return state;
    }
};


const TodoListContextProvider=({children})=>{
    const [todos,dispatch]=useReducer(todosReducer,[
        {text:"Plan the family trip",id:"1",status:0},
        {text:"Go shopping for dinner", id:"3",status:0} ,
        {text:"Go for walk",id:"2",status:0} 
    ]);
    return <TodoListContext.Provider value={{todos,dispatch}}>{children}</TodoListContext.Provider>
}

export default TodoListContextProvider;