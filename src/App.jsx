import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';



function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');


  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function addTodo(e) {
    e.preventDefault();
    if (!newTodo.trim()) {
      setError('Please enter a task');
      return;
    }
    
    setNewTodo('');
    setError('');
  }


  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}>
      <div className="container mx-auto max-w-2xl p-6">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} error={error} darkMode={darkMode} />

      </div>
    </div>
  );
}

export default App;
