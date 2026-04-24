import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        <div className="p-6 bg-green-600">
          <h1 className="text-3xl font-bold text-white text-center">
            My Tasks
          </h1>
        </div>

        <div className="p-4">
          <TodoInput />
          <TodoList />
        </div>
        
      </div>
    </div>
  )
}

export default App