import axios from 'axios';
import { Todo } from '../models/TodoModel';

const API_URL = import.meta.env.VITE_API_URL

class TodoService {
  static async getAllTodos() {
    const response = await axios.get(API_URL);
    return response.data.map(todo => Todo.fromJson(todo));
  }

  static async createTodo(todoData) {
    const response = await axios.post(API_URL, todoData);
    return Todo.fromJson(response.data);
  }

  static async deleteTodo(id) {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }

  static async summarizeTodos() {
    const response = await axios.post(`${API_URL}/summarize`);
    return response.data;
  }
}

export default TodoService;