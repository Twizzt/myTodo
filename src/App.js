import {useState, useEffect} from 'react';
import Header from './Components/Header';
import TodoList from "./Components/TodoList";
import CreateTodoForm from "./Components/CreateTodoForm";
function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
      }

  };
  
  return (
    <>
    <div className="app-container">
      <Header />
      <CreateTodoForm 
        setStatus={setStatus} 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
      />
      <TodoList 
        filteredTodos={filteredTodos} 
        todos={todos} 
        setTodos={setTodos}
      />
    </div>
      
    </>
  );
}

export default App;
