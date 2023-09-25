import { useState } from "react";
import Login from "./Components/login/Login";
import TodoForm from "./Components/todoForm/TodoForm";
import TaskList from "./Components/taskList/TaskList";

function App() {
  const [logged, setLogged] = useState(false);
  const [todos, setTodos] = useState([]);

  const addTodo = (name) => {
    setTodos([...todos, { name, completed: false }]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const editTodo = (index, newName) => {
    const updatedTodos = [...todos];
    updatedTodos[index].name = newName;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <div>
        {logged ? (
          <>
            <h1>Lista de Tareas</h1>
            <TodoForm
              setLogged={setLogged}
              addTodo={addTodo}
              clearCompleted={clearCompleted}
            />
            <TaskList
              todos={todos}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          </>
        ) : (
          <Login setLogged={setLogged} />
        )}
      </div>
    </div>
  );
}

export default App;
