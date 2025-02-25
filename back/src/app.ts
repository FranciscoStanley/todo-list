import express from 'express';
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app = express();

// Habilita o CORS para todas as rotas
app.use(cors());

// Middleware para parse de JSON
app.use(express.json());

// Rotas
app.use("/api/todos", todoRoutes);

export default app;


