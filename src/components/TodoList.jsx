import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, onEdit, onDelete, editingTodo, onUpdateTodo, onCancelEdit, darkMode
}) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
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
          isEditing={editingTodo?.id === todo.id}
          editingText={editingTodo?.text}
          onUpdate={onUpdateTodo}
          onCancelEdit={onCancelEdit}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default TodoList; 