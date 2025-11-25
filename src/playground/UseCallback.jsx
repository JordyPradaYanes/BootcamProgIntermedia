import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Componente hijo que recibe una función
function Button({ onClick, label, renderCount }) {
    console.log(`🔄 Renderizando botón: ${label}`);
    
    return (
        <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
            <button
                onClick={onClick}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
                {label}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
                Renders: {renderCount}
            </p>
        </div>
    );
}

// Componente optimizado con React.memo
const MemoizedButton = React.memo(Button);

function UseCallback() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // Función SIN useCallback - se crea nueva en cada render
    const incrementWithout = () => {
        console.log('🔴 Función SIN useCallback creada');
        setCount(count + 1);
    };

    // Función CON useCallback - se memoriza
    const incrementWith = useCallback(() => {
        console.log('🟢 Función CON useCallback ejecutada');
        setOtherCount(prev => prev + 1);
    }, []); // Array vacío = la función nunca cambia

    // Función con dependencias
    const addToCount = useCallback((value) => {
        console.log('🟢 addToCount ejecutada');
        setCount(prev => prev + value);
    }, []); // No depende de count porque usa la forma funcional de setState

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Hook useCallback</h1>
                            <p className="text-gray-600 mt-1">Memoización de funciones para optimizar rendimiento</p>
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
                    {/* Sin useCallback */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🔴</span>
                            SIN useCallback
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                                <p className="text-sm text-gray-600 mb-1">Contador</p>
                                <p className="text-4xl font-bold text-red-600">{count}</p>
                            </div>
                            <button
                                onClick={incrementWithout}
                                className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Incrementar (Sin useCallback)
                            </button>
                            <div className="p-3 bg-red-50 rounded-lg">
                                <p className="text-xs text-red-800">
                                    ⚠️ La función se crea nueva en cada render
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Con useCallback */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🟢</span>
                            CON useCallback
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                                <p className="text-sm text-gray-600 mb-1">Contador</p>
                                <p className="text-4xl font-bold text-green-600">{otherCount}</p>
                            </div>
                            <button
                                onClick={incrementWith}
                                className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Incrementar (Con useCallback)
                            </button>
                            <div className="p-3 bg-green-50 rounded-lg">
                                <p className="text-xs text-green-800">
                                    ✅ La función se memoriza
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ejemplo con parámetros */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">➕</span>
                        Función con Parámetros
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button
                            onClick={() => addToCount(1)}
                            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                        >
                            +1
                        </button>
                        <button
                            onClick={() => addToCount(5)}
                            className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                        >
                            +5
                        </button>
                        <button
                            onClick={() => addToCount(10)}
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                        >
                            +10
                        </button>
                        <button
                            onClick={() => setCount(0)}
                            className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <code className="text-xs text-gray-700">
                            const addToCount = useCallback((value) =&gt; setCount(prev =&gt; prev + value), []);
                        </code>
                    </div>
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
                            <h3 className="font-bold text-blue-900 mb-2">¿Qué es useCallback?</h3>
                            <p className="text-blue-800 text-sm mb-2">
                                useCallback memoriza una función para que mantenga la misma referencia entre renders. 
                                Es útil cuando pasas funciones como props a componentes hijos optimizados con React.memo.
                            </p>
                            <div className="bg-blue-100 p-3 rounded mt-2">
                                <code className="text-xs text-blue-900">
                                    const memoizedCallback = useCallback(() =&gt; doSomething(), [dependencies]);
                                </code>
                            </div>
                            <p className="text-xs text-blue-700 mt-2">
                                💡 Abre la consola del navegador para ver cuándo se crean las funciones
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseCallback;