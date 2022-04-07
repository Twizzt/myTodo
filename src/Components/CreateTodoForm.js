import { v4 as uuidv4 } from "uuid";

const CreateTodoForm = ( { setStatus, setInputText, todos, setTodos, inputText} ) => {

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: uuidv4()},
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

  return (
    <form  onSubmit={handleSubmitTodo} className="todo-form">
        <input value={inputText} onChange={handleChange} className="add-todo"></input>
        <button className="submit-button"><i className="fas fa-plus-square"></i></button>
        <select name="todos" onChange={statusHandler} className="sort-todos">
            <option value="all">
                All
            </option>
            <option value="completed">
                Completed
            </option>
            <option value="uncompleted">
                Not Completed
            </option>
        </select>
    </form>
  )
}

export default CreateTodoForm;
