import { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  date: Date;
  archived: boolean;
}

const TodoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    // O campo "date" pode representar, por exemplo, a data de criação ou o prazo da tarefa
    date: { type: Date, default: Date.now },
    archived: { type: Boolean, default: false },
  },
  {
    // Caso queira também ter os campos "createdAt" e "updatedAt" automaticamente
    timestamps: true,
  }
);

export default model<ITodo>("Todo", TodoSchema);
