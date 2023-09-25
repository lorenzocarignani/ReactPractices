import React from "react";
import EditTodo from "../editTodo/EditTodo";

const TaskList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          {todo.completed ? <del>{todo.name}</del> : todo.name}
          <EditTodo
            index={index}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
