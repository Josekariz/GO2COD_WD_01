import React from 'react';
import { PlusCircle, X } from 'lucide-react';

function TodoForm({ newTodo, setNewTodo, addTodo, error, darkMode }) {
    return (
        <form onSubmit={addTodo} className="mb-6 group">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    className={`flex-1 p-3 rounded-lg border
                        ${darkMode
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        shadow-sm`}
                />
                <button
                    type="submit"
                    className={`px-4 py-3 bg-blue-500 text-white rounded-lg
                        hover:bg-blue-600 transition-all duration-200
                        flex items-center gap-2 font-medium
                        shadow-sm hover:shadow-md
                        active:transform active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed`}
                    disabled={!newTodo.trim()}
                >
                    <PlusCircle className="w-5 h-5" />
                    Add Task
                </button>
            </div>
            {error && (
                <p className="text-red-500 mt-2 text-sm flex items-center gap-1">
                    <X className="w-4 h-4" />
                    {error}
                </p>
            )}
        </form>
    );
}

export default TodoForm;