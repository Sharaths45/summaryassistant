import { useState, useEffect } from 'react';
import TodoController from '../controllers/TodoController';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoView = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [isLoading, setIsLoading] = useState(false);

  const refreshTodos = async () => {
    await TodoController.fetchTodos(setTodos);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  const handleAddTodo = async () => {
    await TodoController.addTodo(newTodo, setNewTodo, refreshTodos);
  };

  const handleDeleteTodo = async (id) => {
    await TodoController.deleteTodo(id, refreshTodos);
  };

  const handleSummarize = async () => {
    await TodoController.summarizeTodos(setIsLoading);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Todo Summary Assistant
        </h1>
        
        <TodoForm 
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />
        
        <TodoList 
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleSummarize={handleSummarize}
          isLoading={isLoading}
        />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default TodoView;