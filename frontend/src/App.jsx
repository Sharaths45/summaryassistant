import TodoView from './views/TodoView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Header */}
      <header className="bg-indigo-600 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-white text-center">
            Todo Summary Assistant
          </h1>
          <p className="text-indigo-100 text-sm text-center mt-1">
            Powered by OpenAI
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <TodoView />
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Todo Summary Assistant</p>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="shadow-lg"
      />
    </div>
  );
}

export default App;