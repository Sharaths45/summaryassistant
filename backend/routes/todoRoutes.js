import { Router } from 'express';
import { getAllTodos, createTodo, deleteTodo } from '../controllers/todoController.js';
import { summarizeAndSend } from '../controllers/summaryController.js';

const router = Router();

router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);
router.post('/summarize', summarizeAndSend);

export default router;
