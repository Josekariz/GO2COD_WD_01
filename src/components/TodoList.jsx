import React from 'react';
import TodoItem from './TodoItem.jsx';


function TodoList({ todos, toggleComplete, onEdit, onDelete, darkMode }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          No tasks yet. Add one to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default TodoList;