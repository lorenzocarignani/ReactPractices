import React, { useState } from "react";

const TodoForm = ({ addTodo, clearCompleted, setLogged }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleLogout = () => {
    setLogged(false);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Agregar tarea</button>
      <button onClick={clearCompleted}>Borrar completadas</button>
    </div>
  );
};

export default TodoForm;
