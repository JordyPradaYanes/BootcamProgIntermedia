import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function UseMemo() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [multiplier, setMultiplier] = useState(1);
    const [filter, setFilter] = useState('all');
    const [renderCount, setRenderCount] = useState(0);

    // Simulación de cálculo costoso SIN useMemo
    const expensiveCalculationWithout = () => {
        console.log('🔴 Calculando SIN useMemo...');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return numbers.reduce((acc, num) => acc + num * multiplier, 0);
    };

    // Simulación de cálculo costoso CON useMemo
    const expensiveCalculationWith = useMemo(() => {
        console.log('🟢 Calculando CON useMemo...');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return numbers.reduce((acc, num) => acc + num * multiplier, 0);
    }, [numbers, multiplier]); // Solo recalcula cuando cambian numbers o multiplier

    // Filtrar números con useMemo
    const filteredNumbers = useMemo(() => {
        console.log('🟢 Filtrando números...');
        if (filter === 'even') return numbers.filter(n => n % 2 === 0);
        if (filter === 'odd') return numbers.filter(n => n % 2 !== 0);
        return numbers;
    }, [numbers, filter]);

    const addNumber = () => {
        const newNum = Math.floor(Math.random() * 100) + 1;
        setNumbers([...numbers, newNum]);
    };

    const removeLastNumber = () => {
        if (numbers.length > 0) {
            setNumbers(numbers.slice(0, -1));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Hook useMemo</h1>
                            <p className="text-gray-600 mt-1">Optimización de cálculos costosos mediante memoización</p>
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
                    {/* Controles */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🎛️</span>
                            Controles
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Multiplicador: {multiplier}
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={multiplier}
                                    onChange={(e) => setMultiplier(Number(e.target.value))}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={addNumber}
                                    className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    + Agregar Número
                                </button>
                                <button
                                    onClick={removeLastNumber}
                                    className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                                    disabled={numbers.length === 0}
                                >
                                    - Quitar Último
                                </button>
                            </div>
                            <button
                                onClick={() => setRenderCount(renderCount + 1)}
                                className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                            >
                                🔄 Forzar Re-render
                            </button>
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600">Renders: <span className="font-bold">{renderCount}</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📊</span>
                            Resultados
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                                <p className="text-sm text-gray-600 mb-1">CON useMemo (Optimizado)</p>
                                <p className="text-3xl font-bold text-green-600">{expensiveCalculationWith}</p>
                                <p className="text-xs text-gray-500 mt-1">Solo recalcula cuando cambian las dependencias</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                                <p className="text-sm text-gray-600 mb-1">SIN useMemo (No optimizado)</p>
                                <p className="text-3xl font-bold text-red-600">{expensiveCalculationWithout()}</p>
                                <p className="text-xs text-gray-500 mt-1">Recalcula en cada render</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <p className="text-xs text-blue-800">
                                    💡 Abre la consola del navegador para ver cuándo se ejecutan los cálculos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Números */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🔢</span>
                        Números ({numbers.length})
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {numbers.map((num, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold"
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filtro */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🔍</span>
                        Filtro de Números (useMemo)
                    </h2>
                    <div className="flex gap-3 mb-4">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filter === 'all'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setFilter('even')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filter === 'even'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Pares
                        </button>
                        <button
                            onClick={() => setFilter('odd')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filter === 'odd'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Impares
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {filteredNumbers.map((num, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold"
                            >
                                {num}
                            </div>
                        ))}
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
                            <h3 className="font-bold text-blue-900 mb-2">¿Qué es useMemo?</h3>
                            <p className="text-blue-800 text-sm mb-2">
                                useMemo memoriza el resultado de un cálculo costoso y solo lo recalcula cuando sus dependencias cambian. 
                                Esto mejora el rendimiento evitando cálculos innecesarios en cada render.
                            </p>
                            <div className="bg-blue-100 p-3 rounded mt-2">
                                <code className="text-xs text-blue-900">
                                    const value = useMemo(() =&gt; expensiveCalculation(), [dependencies]);
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseMemo;
