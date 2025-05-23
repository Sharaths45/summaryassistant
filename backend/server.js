import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connecttodb } from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

connecttodb()

app.use('/api/todos', todoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


