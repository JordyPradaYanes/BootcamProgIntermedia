import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkEmailExists } from "../../services/db";

function ForgotPage() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) {
            setError("");
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            return "El correo es requerido";
        } else if (!emailRegex.test(email)) {
            return "El formato del correo no es válido";
        } else if (!checkEmailExists(email)) {
            return "No existe una cuenta con este correo electrónico";
        }
        
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationError = validateEmail();
        if (validationError) {
            setError(validationError);
            return;
        }
        
        setIsLoading(true);

        // Simular envío de email
        setTimeout(() => {
            setIsLoading(false);
            setSuccess(true);
            
            // Redirigir a reset después de 3 segundos
            setTimeout(() => {
                navigate("/reset", { state: { email } });
            }, 3000);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl flex shadow-xl rounded-lg overflow-hidden bg-white">
                {/* Lado izquierdo - Información */}
                <div className="hidden lg:flex flex-1 bg-slate-800 p-12 flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="text-white text-xl font-bold">UFPSO Bootcamp</span>
                        </div>
                        
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Recuperación de Contraseña
                        </h1>
                        <p className="text-gray-300 text-lg mb-8">
                            No te preocupes, te ayudaremos a recuperar el acceso a tu cuenta de forma segura
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Proceso seguro</h3>
                                    <p className="text-gray-400 text-sm">Verificación por correo electrónico</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Rápido y fácil</h3>
                                    <p className="text-gray-400 text-sm">Solo toma unos minutos</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Soporte disponible</h3>
                                    <p className="text-gray-400 text-sm">Asistencia técnica 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-gray-400 text-sm">
                        <p>© 2025 UFPSO. Todos los derechos reservados.</p>
                    </div>
                </div>

                {/* Lado derecho - Formulario */}
                <div className="flex-1 p-8 lg:p-12">
                    <div className="max-w-md mx-auto">
                        {!success ? (
                            <>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        Recuperar Contraseña
                                    </h2>
                                    <p className="text-gray-600">
                                        Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-red-700 text-sm font-medium">{error}</p>
                                        </div>
                                    </div>
                                )}

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="ejemplo@correo.com"
                                            className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </>
                                        ) : (
                                            "Enviar Enlace de Recuperación"
                                        )}
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                                    <p className="text-center text-sm text-gray-600">
                                        ¿Recordaste tu contraseña?{" "}
                                        <Link
                                            to="/"
                                            className="text-blue-600 hover:text-blue-700 font-semibold"
                                        >
                                            Iniciar Sesión
                                        </Link>
                                    </p>
                                    <p className="text-center text-sm text-gray-600">
                                        ¿No tienes una cuenta?{" "}
                                        <Link
                                            to="/register"
                                            className="text-blue-600 hover:text-blue-700 font-semibold"
                                        >
                                            Regístrate aquí
                                        </Link>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    ¡Correo Enviado!
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Hemos enviado un enlace de recuperación a:
                                </p>
                                <p className="text-blue-600 font-semibold mb-6">
                                    {email}
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                                    <p className="text-sm text-gray-700">
                                        Por favor, revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Redirigiendo a restablecer contraseña en 3 segundos...
                                </p>
                                <div className="mt-6">
                                    <Link
                                        to="/reset"
                                        state={{ email }}
                                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                                    >
                                        Ir a restablecer contraseña ahora
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPage;
