import { Link } from 'react-router-dom';
import { useState } from 'react';

function UseState() {
    const [contador, setContador] = useState(0);
    const [color, setColor] = useState("bg-slate-500");

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-700">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Hook UseState</h1>
                    <p className="text-slate-400">Gestionando el estado local en componentes funcionales</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Ejemplo 1: Contador */}
                    <div className="p-6 bg-slate-700/50 rounded-xl border border-slate-600">
                        <h2 className="text-xl font-semibold text-white mb-4 text-center">Contador</h2>
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="text-6xl font-bold text-indigo-400">
                                {contador}
                            </div>
                            <div className="flex space-x-3">
                                <button 
                                    onClick={() => setContador(contador - 1)}
                                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors font-medium"
                                >
                                    Decrementar
                                </button>
                                <button 
                                    onClick={() => setContador(0)}
                                    className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors font-medium"
                                >
                                    Reiniciar
                                </button>
                                <button 
                                    onClick={() => setContador(contador + 1)}
                                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors font-medium"
                                >
                                    Incrementar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Ejemplo 2: Cambiador de Color */}
                    <div className="p-6 bg-slate-700/50 rounded-xl border border-slate-600">
                        <h2 className="text-xl font-semibold text-white mb-4 text-center">Cambiador de Color</h2>
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className={`w-32 h-32 rounded-2xl shadow-lg transition-colors duration-500 ${color}`}></div>
                            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                                <button 
                                    onClick={() => setColor("bg-blue-500")}
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors font-medium"
                                >
                                    Azul
                                </button>
                                <button 
                                    onClick={() => setColor("bg-red-500")}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-lg transition-colors font-medium"
                                >
                                    Rojo
                                </button>
                                <button 
                                    onClick={() => setColor("bg-green-500")}
                                    className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors font-medium"
                                >
                                    Verde
                                </button>
                                <button 
                                    onClick={() => setColor("bg-purple-500")}
                                    className="px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-lg transition-colors font-medium"
                                >
                                    Morado
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link 
                        to="/HomeHooks" 
                        className="inline-block px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
                    >
                        Volver al Menú
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UseState;