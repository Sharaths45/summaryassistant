import TodoService from '../services/TodoService';
import { toast } from 'react-toastify';

class TodoController {
  static async fetchTodos(setTodos) {
    try {
      const todos = await TodoService.getAllTodos();
      setTodos(todos);
    } catch (error) {
      toast.error('Failed to fetch todos');
      throw error;
    }
  }

  static async addTodo(newTodo, setNewTodo, refreshTodos) {
    try {
      if (!newTodo.title.trim()) {
        toast.error('Title is required');
        return false;
      }

      await TodoService.createTodo(newTodo);
      setNewTodo({ title: '', description: '' });
      await refreshTodos();
      toast.success('Todo added successfully');
      return true;
    } catch (error) {
      toast.error('Failed to add todo');
      throw error;
    }
  }

  static async deleteTodo(id, refreshTodos) {
    try {
      await TodoService.deleteTodo(id);
      await refreshTodos();
      toast.success('Todo deleted successfully');
    } catch (error) {
      toast.error('Failed to delete todo');
      throw error;
    }
  }

  static async summarizeTodos(setIsLoading) {
    setIsLoading(true);
    try {
      const result = await TodoService.summarizeTodos();
      toast.success(result.message);
      return result.summary;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to generate summary');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
}

export default TodoController;