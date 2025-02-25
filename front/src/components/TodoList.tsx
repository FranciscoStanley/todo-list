import React from "react";
import { ITodo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
