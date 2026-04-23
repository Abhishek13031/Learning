import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input)); // Sending the text to the store
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input 
        type="text"
        className="border-2 border-slate-300 p-2 rounded-lg flex-1 outline-none focus:border-green-500"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold">Add</button>
    </form>
  );
}