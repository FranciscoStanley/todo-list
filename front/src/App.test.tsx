import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders header "Minha Lista de Tarefas"', () => {
  render(<App />);
  const headerElement = screen.getByText(/Minha Lista de Tarefas/i);
  expect(headerElement).toBeInTheDocument();
});
