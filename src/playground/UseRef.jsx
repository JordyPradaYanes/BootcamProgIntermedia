import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UseRef() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef(null);
    const prevCountRef = useRef();
    const timerRef = useRef(null);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Contador de renders
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    // Guardar valor anterior
    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    // Timer
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isRunning]);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Hook useRef</h1>
                            <p className="text-gray-600 mt-1">Referencias mutables que persisten entre renders</p>
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
                    {/* Referencia a DOM */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🎯</span>
                            Referencia a Elemento DOM
                        </h2>
                        <div className="space-y-4">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Escribe algo..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={focusInput}
                                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Enfocar Input
                            </button>
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <code className="text-xs text-blue-900">
                                    inputRef.current.focus()
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Contador de Renders */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🔄</span>
                            Contador de Renders
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                                <p className="text-sm text-gray-600 mb-1">Renders del componente</p>
                                <p className="text-4xl font-bold text-purple-600">{renderCount.current}</p>
                            </div>
                            <button
                                onClick={() => setCount(count + 1)}
                                className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Forzar Re-render
                            </button>
                            <div className="p-3 bg-purple-50 rounded-lg">
                                <p className="text-xs text-purple-800">
                                    ✅ useRef no causa re-renders cuando cambia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Valor Anterior */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">⏮️</span>
                        Guardar Valor Anterior
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Valor Actual</p>
                            <p className="text-3xl font-bold text-blue-600">{count}</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Valor Anterior</p>
                            <p className="text-3xl font-bold text-green-600">{prevCountRef.current ?? 0}</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Diferencia</p>
                            <p className="text-3xl font-bold text-orange-600">
                                {count - (prevCountRef.current ?? 0)}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setCount(count + 1)}
                            className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                        >
                            + Incrementar
                        </button>
                        <button
                            onClick={() => setCount(count - 1)}
                            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                        >
                            - Decrementar
                        </button>
                        <button
                            onClick={() => setCount(0)}
                            className="flex-1 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Timer */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">⏱️</span>
                        Cronómetro (useRef para guardar intervalos)
                    </h2>
                    <div className="text-center mb-6">
                        <div className="inline-block bg-gray-100 rounded-lg p-8">
                            <p className="text-6xl font-bold text-gray-900 font-mono">
                                {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                                {String(seconds % 60).padStart(2, '0')}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsRunning(!isRunning)}
                            className={`flex-1 px-4 py-3 ${isRunning ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded-lg font-medium transition-colors`}
                        >
                            {isRunning ? '⏸️ Pausar' : '▶️ Iniciar'}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                        >
                            🔄 Reiniciar
                        </button>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <code className="text-xs text-gray-700">
                            timerRef.current = setInterval(...)
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
                            <h3 className="font-bold text-blue-900 mb-2">¿Qué es useRef?</h3>
                            <p className="text-blue-800 text-sm mb-2">
                                useRef devuelve un objeto mutable cuya propiedad .current se puede modificar sin causar re-renders. 
                                Es útil para:
                            </p>
                            <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                                <li>Acceder a elementos DOM directamente</li>
                                <li>Guardar valores que persisten entre renders</li>
                                <li>Almacenar IDs de timers/intervals</li>
                                <li>Guardar valores anteriores de props o state</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseRef;
