import React, { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicionar tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
