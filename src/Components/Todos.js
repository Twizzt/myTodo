
const Todos = ({item, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completedHandler = () => {
        setTodos(
            todos.map((element) => {
            if(element.id === todo.id){
                return{
                    ...element, 
                    completed: !element.completed,
                };
            }
            return element;
        })
        );
    };

  return (
    <div className="todos">
        <li className={`todo-item${todo.completed ? "-completed" : ""}`}>{item}</li>
        <button onClick={completedHandler} className="check-button">
            <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-button">
            <i className="fas fa-trash"></i>
        </button>
    </div>
  )
}

export default Todos;
