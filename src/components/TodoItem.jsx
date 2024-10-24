import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

function TodoItem({ todo, toggleComplete, onEdit, onDelete, darkMode }) {
    return (
        <div
            className={`group p-4 rounded-lg border transition-all duration-300
                ${darkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
                }
                hover:shadow-lg`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className={`w-5 h-5 rounded border-2 
                            ${darkMode
                                ? 'border-gray-600 bg-gray-700'
                                : 'border-gray-300 bg-white'
                            }
                            text-blue-500 focus:ring-blue-500 focus:ring-offset-0`}
                    />
                    <span className={`flex-1 transition-all duration-200 
                        ${todo.completed
                            ? darkMode
                                ? 'line-through text-gray-400'
                                : 'line-through text-gray-500'
                            : darkMode
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}>
                        {todo.text}
                    </span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => onEdit(todo)}
                        className={`p-1 
                            ${darkMode
                                ? 'text-gray-400 hover:text-blue-400'
                                : 'text-gray-600 hover:text-blue-500'
                            }`}
                        aria-label="Edit todo"
                    >
                        <Edit className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className={`p-1 ${darkMode
                                ? 'text-gray-400 hover:text-red-400'
                                : 'text-gray-600 hover:text-red-500'
                            }`}
                        aria-label="Delete todo"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;