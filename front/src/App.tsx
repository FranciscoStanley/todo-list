import React, { useEffect, useState } from "react";
import { ITodo } from "./types/todo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {
  getTodosAPI,
  createTodoAPI,
  updateTodoAPI,
  deleteTodoAPI,
} from "./services/api";
import "./App.css"; // Importa o CSS personalizado

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    const data = await getTodosAPI();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    const newTodo = await createTodoAPI(title);
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    const updatedTodo = await updateTodoAPI(id, { completed });
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = async (id: string) => {
    await deleteTodoAPI(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <header className="todo-header">
          <h1>Minha Lista de Tarefas</h1>
        </header>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
