import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { checkEmailExists } from "../../services/db";

function ResetPage() {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    });
    
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    // Redirigir si no hay email
    useEffect(() => {
        if (!email) {
            navigate("/forgot");
        }
    }, [email, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        // Verificar fortaleza de contraseña en tiempo real
        if (name === "password") {
            setPasswordStrength({
                length: value.length >= 8,
                uppercase: /[A-Z]/.test(value),
                lowercase: /[a-z]/.test(value),
                number: /\d/.test(value),
                special: /[@$!%*#?&]/.test(value)
            });
        }
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!formData.password) {
            newErrors.password = "La contraseña es requerida";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "La contraseña no cumple con los requisitos de seguridad";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "La confirmación de contraseña es requerida";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setIsLoading(true);

        // Simular actualización de contraseña
        setTimeout(() => {
            // Aquí se actualizaría la contraseña en la base de datos
            const users = JSON.parse(localStorage.getItem('users_db')) || [];
            const userIndex = users.findIndex(u => u.email === email);
            
            if (userIndex !== -1) {
                users[userIndex].password = formData.password;
                localStorage.setItem('users_db', JSON.stringify(users));
            }
            
            setIsLoading(false);
            setSuccess(true);
            
            // Redirigir al login después de 3 segundos
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }, 2000);
    };

    if (!email) {
        return null;
    }

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
                            Nueva Contraseña
                        </h1>
                        <p className="text-gray-300 text-lg mb-8">
                            Crea una contraseña segura para proteger tu cuenta
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Contraseña segura</h3>
                                    <p className="text-gray-400 text-sm">Cumple con los requisitos de seguridad</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Protección mejorada</h3>
                                    <p className="text-gray-400 text-sm">Tu cuenta estará más segura</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Acceso inmediato</h3>
                                    <p className="text-gray-400 text-sm">Inicia sesión después de cambiar</p>
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
                                        Restablecer Contraseña
                                    </h2>
                                    <p className="text-gray-600">
                                        Ingresa tu nueva contraseña para <span className="font-semibold text-blue-600">{email}</span>
                                    </p>
                                </div>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    {/* Nueva Contraseña */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nueva Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="••••••••"
                                            className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                    </div>

                                    {/* Confirmar Contraseña */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Confirmar Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            placeholder="••••••••"
                                            className={`w-full px-4 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                                        />
                                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                    </div>

                                    {/* Requisitos de contraseña */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-700 mb-3">
                                            Requisitos de seguridad:
                                        </p>
                                        <ul className="space-y-2">
                                            <li className={`flex items-center gap-2 text-sm ${passwordStrength.length ? 'text-green-600' : 'text-gray-500'}`}>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Al menos 8 caracteres
                                            </li>
                                            <li className={`flex items-center gap-2 text-sm ${passwordStrength.uppercase ? 'text-green-600' : 'text-gray-500'}`}>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Una letra mayúscula
                                            </li>
                                            <li className={`flex items-center gap-2 text-sm ${passwordStrength.lowercase ? 'text-green-600' : 'text-gray-500'}`}>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Una letra minúscula
                                            </li>
                                            <li className={`flex items-center gap-2 text-sm ${passwordStrength.number ? 'text-green-600' : 'text-gray-500'}`}>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Un número
                                            </li>
                                            <li className={`flex items-center gap-2 text-sm ${passwordStrength.special ? 'text-green-600' : 'text-gray-500'}`}>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Un carácter especial (@$!%*#?&)
                                            </li>
                                        </ul>
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
                                                Actualizando...
                                            </>
                                        ) : (
                                            "Restablecer Contraseña"
                                        )}
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-center text-sm text-gray-600">
                                        ¿Recordaste tu contraseña?{" "}
                                        <Link
                                            to="/"
                                            className="text-blue-600 hover:text-blue-700 font-semibold"
                                        >
                                            Iniciar Sesión
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
                                    ¡Contraseña Actualizada!
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Tu contraseña ha sido restablecida exitosamente.
                                </p>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
                                    <p className="text-sm text-gray-700">
                                        Ya puedes iniciar sesión con tu nueva contraseña.
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">
                                    Redirigiendo al login en 3 segundos...
                                </p>
                                <Link
                                    to="/"
                                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Ir al Login Ahora
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPage;
