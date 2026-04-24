import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, editTodo } from '../features/todos/todoSlice';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between bg-slate-100 p-3 rounded-md shadow-sm">
            <span 
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-slate-800'}`}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
            <button 
              onClick={() => {
                const newText = prompt('Edit your task:', todo.text);
                if (newText !== null) {
                  dispatch(editTodo({ id: todo.id, newText }));
                }
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}