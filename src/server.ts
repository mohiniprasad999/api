import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(bodyParser.json());

const todos: Todo[] = [];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todoSchema = new mongoose.Schema<Todo>({
    title: { type: String, required: true },
    description : { type: String , required: true},
    completed: { type: Boolean, default: false },
  });

const TodoModel = mongoose.model<Todo>('Todo', todoSchema);

app.get('/get', async (req, res) => {
    const todos = await TodoModel.find();
    res.json(todos);
  });

app.post('/todos', async (req, res) => {
    const { title } = req.body;
    const todo = new TodoModel({ title, description: String, completed: false });
    await todo.save();
    res.json(todo);
  });
  

  app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await TodoModel.findByIdAndUpdate(id, { title, completed }, { new: true });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  });


  
  app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.deleteOne();
    res.sendStatus(204);
  });
  

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/todo', {
  useUnifiedTopology: true,
    useNewUrlParser: true,
} as mongoose.ConnectOptions)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('MongoDB connection error:', error));
