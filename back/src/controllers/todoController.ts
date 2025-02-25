import { Request, Response } from "express";
import { ITodo } from "../models/todoModel";
import * as service from "../services/todoService";

// Busca e retorna todos os todos
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await service.getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os todos." });
  }
};

// Cria um novo todo; valida a presença do campo title
export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.body;
    if (!title) {
      res.status(400).json({ error: 'O campo "title" é obrigatório.' });
      return;
    }
    const newTodo = await service.createTodo(title);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o todo." });
  }
};

// Atualiza um todo existente com os campos: title, completed, archived e date (quando fornecidos)
export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, completed, archived, date } = req.body;

    // Prepara o objeto com os campos a serem atualizados
    const updatedFields: Partial<ITodo> = {};
    if (title !== undefined) updatedFields.title = title;
    if (completed !== undefined) updatedFields.completed = completed;
    if (archived !== undefined) updatedFields.archived = archived;
    if (date !== undefined) updatedFields.date = date;

    const updatedTodo = await service.updateTodo(id, updatedFields);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o todo." });
  }
};

// Deleta um todo pelo id
export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await service.deleteTodo(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o todo." });
  }
};
