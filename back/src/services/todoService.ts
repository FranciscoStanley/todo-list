import { ITodo } from "../models/todoModel";
import * as repository from "../repositories/todoRepository";

// Busca todos os todos
export const getTodos = async (): Promise<ITodo[]> => {
  return await repository.findAll();
};

// Cria um novo todo utilizando apenas o título; os demais campos (completed, archived, date)
// serão definidos conforme os valores padrão no schema
export const createTodo = async (title: string): Promise<ITodo> => {
  return await repository.create({ title });
};

// Atualiza os campos do todo; permite atualizar title, completed, archived e date
export const updateTodo = async (
  id: string,
  fieldsToUpdate: Partial<ITodo>
): Promise<ITodo> => {
  const updatedTodo = await repository.update(id, fieldsToUpdate);
  if (!updatedTodo) {
    throw new Error("Todo not found");
  }
  return updatedTodo;
};

// Deleta o todo pelo id
export const deleteTodo = async (id: string): Promise<void> => {
  await repository.deleteTodo(id);
};
