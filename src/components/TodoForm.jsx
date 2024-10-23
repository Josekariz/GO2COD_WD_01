import { PlusCircle } from 'lucide-react';

function TodoForm({ newTodo, setNewTodo, addTodo, error, darkMode }) {
    return (
        <form onSubmit={addTodo} className="mb-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    className={`flex-1 p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                    className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"

                ><PlusCircle className="w-5 h-5" />Add</button>
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </form>
    );
}

export default TodoForm;