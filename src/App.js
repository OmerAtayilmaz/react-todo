import TodoList from "./components/TodoList";
import TodoListContextProvider from './contexts/TodoListContext';
function App() {
  return (
    <div className="App">
      <TodoListContextProvider>
      <TodoList/>
      </TodoListContextProvider>
    </div>
  );
}

export default App;
