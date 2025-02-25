import React from "react";
import { ITodo } from "../types/todo";

interface TodoItemProps {
  todo: ITodo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span
        onClick={() => onToggle(todo.id, !todo.completed)}
        style={{ cursor: "pointer" }}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>Excluir</button>
    </li>
  );
};

export default TodoItem;
