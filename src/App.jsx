import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    //check if user has preferred mode else use systems settings
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

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
