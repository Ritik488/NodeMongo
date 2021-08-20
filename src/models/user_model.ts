/*
 * To implement all the CRUD operations firstly import nongoose
*/
import mongoose from "mongoose";

interface TodoI {
    title: string;
    description: string;
}

/*
 * We need document to connect with out interface
 ? Next we need Schema for our document
 ! Schema is the structure of our entire document
 */
interface TodoDocument extends mongoose.Document {
    title: string;
    description: string;
}

//TODO:Schema Make Here
const todoSchema = new mongoose.Schema<TodoDocument>({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
});

interface todoModelInterface extends mongoose.Model<TodoDocument> {
    set(x: TodoI): TodoDocument;
}

todoSchema.statics.set = (x: TodoI) => {
    return new Todo(x);
}

const Todo = mongoose.model<TodoDocument, todoModelInterface>(
    "Todo",
    todoSchema,
);


Todo.set({
    "title": "Some Title",
    "description": "Some Description"
});

export { Todo };