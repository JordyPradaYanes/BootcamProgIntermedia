import { useReducer } from 'react';
import { Link } from 'react-router-dom';

// Definir el estado inicial
const initialState = {
    count: 0,
    todos: [],
    inputValue: ''
};

// Definir el reducer
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: 0 };
        case 'SET_INPUT':
            return { ...state, inputValue: action.payload };
        case 'ADD_TODO':
            if (!state.inputValue.trim()) return state;
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: state.inputValue, completed: false }],
                inputValue: ''
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'CLEAR_TODOS':
            return { ...state, todos: [] };
        default:
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Hook useReducer</h1>
                            <p className="text-gray-600 mt-1">Gestión de estado complejo con acciones</p>
                        </div>
                        <Link
                            to="/HomeHooks"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                        >
                            ← Volver
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Contador */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🔢</span>
                            Contador con Reducer
                        </h2>
                        <div className="text-center mb-6">
                            <div className="inline-block bg-blue-100 rounded-lg p-8 mb-4">
                                <p className="text-6xl font-bold text-blue-600">{state.count}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => dispatch({ type: 'DECREMENT' })}
                                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                            >
                                - Decrementar
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'RESET' })}
                                className="flex-1 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                            >
                                ↻ Reset
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'INCREMENT' })}
                                className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                            >
                                + Incrementar
                            </button>
                        </div>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <code className="text-xs text-gray-700">
                                dispatch(&#123; type: 'INCREMENT' &#125;)
                            </code>
                        </div>
                    </div>

                    {/* Estadísticas de Todos */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📊</span>
                            Estadísticas
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                                <p className="text-sm text-gray-600 mb-1">Total de Tareas</p>
                                <p className="text-3xl font-bold text-blue-600">{state.todos.length}</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                                <p className="text-sm text-gray-600 mb-1">Completadas</p>
                                <p className="text-3xl font-bold text-green-600">
                                    {state.todos.filter(t => t.completed).length}
                                </p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                                <p className="text-sm text-gray-600 mb-1">Pendientes</p>
                                <p className="text-3xl font-bold text-orange-600">
                                    {state.todos.filter(t => !t.completed).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Todo List */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">✅</span>
                        Lista de Tareas
                    </h2>
                    
                    <form onSubmit={handleAddTodo} className="mb-6">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={state.inputValue}
                                onChange={(e) => dispatch({ type: 'SET_INPUT', payload: e.target.value })}
                                placeholder="Escribe una nueva tarea..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Agregar
                            </button>
                            {state.todos.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => dispatch({ type: 'CLEAR_TODOS' })}
                                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    Limpiar Todo
                                </button>
                            )}
                        </div>
                    </form>

                    {state.todos.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400 text-lg">No hay tareas. ¡Agrega una nueva!</p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {state.todos.map((todo) => (
                                <div
                                    key={todo.id}
                                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                                        todo.completed
                                            ? 'bg-green-50 border-green-200'
                                            : 'bg-white border-gray-200 hover:border-blue-300'
                                    }`}
                                >
                                    <button
                                        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                                            todo.completed
                                                ? 'bg-green-600 border-green-600'
                                                : 'border-gray-300 hover:border-blue-500'
                                        }`}
                                    >
                                        {todo.completed && (
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                    <span
                                        className={`flex-1 ${
                                            todo.completed
                                                ? 'text-gray-500 line-through'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {todo.text}
                                    </span>
                                    <button
                                        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                                        className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 rounded transition-colors"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-blue-900 mb-2">¿Qué es useReducer?</h3>
                            <p className="text-blue-800 text-sm mb-2">
                                useReducer es una alternativa a useState para manejar estados complejos. Es especialmente útil cuando:
                            </p>
                            <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                                <li>El estado tiene múltiples sub-valores relacionados</li>
                                <li>El próximo estado depende del anterior</li>
                                <li>Quieres optimizar el rendimiento con lógica compleja</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseReducer;