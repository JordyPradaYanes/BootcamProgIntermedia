import { useState } from "react";

function ForgotPage() {
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
                                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-bold mb-4">
                                ¿Olvidaste tu contraseña?
                            </h3>
                            <p className="text-lg opacity-90">
                                No te preocupes, te ayudaremos a recuperar el acceso a tu cuenta
                            </p>
                        </div>
                    </div>

                    {/* Lado derecho - Formulario */}
                    <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex-1 overflow-y-auto p-8 lg:p-16 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
                            <div className="max-w-md mx-auto w-full">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Recuperar Contraseña
                                    </h2>
                                    <p className="text-gray-500 mt-2">
                                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
                                    </p>
                                </div>

                                {/* Formulario */}
                                <form className="space-y-6">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Correo Electrónico
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
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="tu@email.com"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
                                    >
                                        Enviar Enlace de Recuperación
                                    </button>
                                </form>

                                <div className="my-8 relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">
                                            O
                                        </span>
                                    </div>
                                </div>

                                <p className="text-center text-sm text-gray-600">
                                    ¿Recordaste tu contraseña?{" "}
                                    <a
                                        href="#"
                                        className="font-bold text-purple-600 hover:text-purple-700"
                                    >
                                        Iniciar Sesión
                                    </a>
                                </p>

                                <p className="text-center mt-4 text-sm text-gray-600">
                                    ¿No tienes una cuenta?{" "}
                                    <a
                                        href="#"
                                        className="font-bold text-purple-600 hover:text-purple-700"
                                    >
                                        Regístrate
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

export default ForgotPage;
