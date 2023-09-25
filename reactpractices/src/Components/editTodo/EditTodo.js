import React, { useState } from "react";

const EditTodo = ({ index, todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newName.trim() !== "") {
      editTodo(index, newName);
      setIsEditing(false);
    }
  };

  const handleDeleteClick = () => {
    deleteTodo(index);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={handleDeleteClick}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default EditTodo;
