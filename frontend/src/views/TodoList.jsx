const TodoList = ({ todos, handleDeleteTodo, handleSummarize, isLoading }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Todos</h2>
        <button
          onClick={handleSummarize}
          disabled={isLoading || todos.length === 0}
          className={`px-4 py-2 rounded-md ${
            isLoading || todos.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          } text-white transition`}
        >
          {isLoading ? 'Processing...' : 'Summarize & Send to Slack'}
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet. Add one above!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li key={todo.id} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{todo.title}</h3>
                  {todo.description && (
                    <p className="text-gray-600 text-sm mt-1">{todo.description}</p>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;