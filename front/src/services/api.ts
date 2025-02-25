const API_URL = '/api';

export const getTodosAPI = async () => {
  const response = await fetch(`${API_URL}/todos`);
  return await response.json();
};

export const createTodoAPI = async (title: string) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return await response.json();
};

export const updateTodoAPI = async (
  id: string,
  updates: Partial<{
    title: string;
    completed: boolean;
    archived: boolean;
    date: string;
  }>
) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return await response.json();
};

export const deleteTodoAPI = async (id: string) => {
  await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
};
