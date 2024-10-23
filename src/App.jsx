import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  //DarkMode
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

  //Todos
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  // Initialize todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();

    if (!newTodo.trim()) {
      setError('Please enter a task');
      return;
    }
    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos(currentTodos => [...currentTodos, todo]);
    setNewTodo('');
    setError('');
  }



  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
      }`}>
      <div className="container mx-auto max-w-2xl p-6">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <TodoForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
          error={error}
          darkMode={darkMode}
        />

        <TodoList
          todos={todos}
          toggleComplete={() => { }}
          onEdit={() => { }}
          onDelete={() => { }}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App; 