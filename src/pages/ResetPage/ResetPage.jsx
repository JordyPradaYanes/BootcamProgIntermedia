import { useState } from "react";

function ResetPage() {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
                {/* Tarjeta principal */}
                <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-full max-h-[95vh]">
                    {/* Lado izquierdo - Bienvenida (solo desktop) */}
                    <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center p-12 text-white">
                        <div className="text-center max-w-md">
                            <div className="w-32 h-32 mx-auto mb-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                <svg
                                    className="w-16 h-16"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-bold mb-4">
                                Nueva Contraseña
                            </h3>
                            <p className="text-lg opacity-90">
                                Crea una contraseña segura para proteger tu cuenta
                            </p>
                        </div>
                    </div>

                    {/* Lado derecho - Formulario */}
                    <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex-1 overflow-y-auto p-8 lg:p-16 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
                            <div className="max-w-md mx-auto w-full">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Restablecer Contraseña
                                    </h2>
                                    <p className="text-gray-500 mt-2">
                                        Ingresa tu nueva contraseña
                                    </p>
                                </div>

                                {/* Formulario */}
                                <form className="space-y-6">
                                    {/* Nueva Contraseña */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nueva Contraseña
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="h-5 w-5 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Confirmar Contraseña */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirmar Contraseña
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="h-5 w-5 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Requisitos de contraseña */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                        <p className="text-sm font-medium text-blue-800 mb-2">
                                            La contraseña debe contener:
                                        </p>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Al menos 8 caracteres
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Una letra mayúscula
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Un número
                                            </li>
                                        </ul>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
                                    >
                                        Restablecer Contraseña
                                    </button>
                                </form>

                                <p className="text-center mt-8 text-sm text-gray-600">
                                    ¿Recordaste tu contraseña?{" "}
                                    <a
                                        href="#"
                                        className="font-bold text-purple-600 hover:text-purple-700"
                                    >
                                        Iniciar Sesión
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPage;
