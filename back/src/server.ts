import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/mongodb";
dotenv.config();

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
