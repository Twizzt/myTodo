import Todos from "./Todos";



const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todolist-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <Todos 
                key={todo.id} 
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
                item={todo.text}
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList;