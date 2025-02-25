import TodoModel, { ITodo } from "../models/todoModel";

// Retorna todos os documentos (todos)
export const findAll = async (): Promise<ITodo[]> => {
  return await TodoModel.find();
};

// Busca um documento pelo id (string)
export const findById = async (id: string): Promise<ITodo | null> => {
  return await TodoModel.findById(id);
};

// Cria um novo documento com os campos fornecidos
export const create = async (todo: Partial<ITodo>): Promise<ITodo> => {
  const newTodo = new TodoModel(todo);
  return await newTodo.save();
};

// Atualiza o documento identificado pelo id com os campos passados
export const update = async (
  id: string,
  updatedFields: Partial<ITodo>
): Promise<ITodo | null> => {
  return await TodoModel.findByIdAndUpdate(id, updatedFields, { new: true });
};

// Deleta o documento identificado pelo id
export const deleteTodo = async (id: string): Promise<void> => {
  await TodoModel.findByIdAndDelete(id);
};
