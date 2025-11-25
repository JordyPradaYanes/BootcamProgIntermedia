import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveUserToDB, checkEmailExists } from "../../services/db";

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        checked: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    // Mock existing emails for uniqueness check (legacy, keeping for reference but using DB now)
    // const existingEmails = ["test@test.com", "user@example.com"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        // Form is valid, start loading
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            const result = saveUserToDB(formData);
            
            if (result.success) {
                console.log("Form submitted and saved:", formData);
                alert("Registro exitoso! Redirigiendo al login...");
                navigate("/login");
            } else {
                alert("Hubo un error al guardar el usuario.");
            }
            
            setIsLoading(false);
            setErrors({});
        }, 2000);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        
        // Clear error for the specific field when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    }

    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "El correo es requerido";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "El formato del correo no es válido";
        } else if (checkEmailExists(formData.email)) {
            newErrors.email = "El correo ya está registrado";
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!formData.password) {
            newErrors.password = "La contraseña es requerida";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial";
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "La confirmación de contraseña es requerida";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }

        // Checkbox validation
        if (!formData.checked) {
            newErrors.checked = "Debes aceptar los términos y condiciones";
        }

        return newErrors;
    }

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
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-bold mb-4">
                                ¡Únete a nosotros!
                            </h3>
                            <p className="text-lg opacity-90">
                                Crea tu cuenta y comienza una experiencia increíble
                            </p>
                        </div>
                    </div>

                    {/* Lado derecho - Formulario */}
                    <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex-1 overflow-y-auto p-8 lg:p-16 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
                            <div className="max-w-md mx-auto w-full">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Crear Cuenta
                                    </h2>
                                    <p className="text-gray-500 mt-2">Completa el formulario para registrarte</p>
                                </div>

                                {/* Formulario */}
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* Nombre Completo */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre Completo
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
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                placeholder="Juan Pérez"
                                                className={`w-full pl-10 pr-4 py-3.5 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                            />
                                        </div>
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

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
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                placeholder="tu@email.com"
                                                className={`w-full pl-10 pr-4 py-3.5 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                            />
                                        </div>
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Contraseña */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Contraseña
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
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                placeholder="••••••••"
                                                className={`w-full pl-10 pr-4 py-3.5 rounded-xl border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                            />
                                        </div>
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
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
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                placeholder="••••••••"
                                                className={`w-full pl-10 pr-4 py-3.5 rounded-xl border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                            />
                                        </div>
                                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="checked"
                                                checked={formData.checked}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                                            />
                                            <label className="ml-2 text-sm text-gray-700">
                                                Acepto los{" "}
                                                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                                                    términos y condiciones
                                                </a>
                                            </label>
                                        </div>
                                        {errors.checked && <p className="text-red-500 text-xs mt-1 ml-6">{errors.checked}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Procesando...
                                            </>
                                        ) : (
                                            "Crear Cuenta"
                                        )}
                                    </button>
                                </form>

                                <div className="my-8 relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">
                                            O regístrate con
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                        Google
                                    </button>

                                    <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium">
                                        <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Facebook
                                    </button>
                                </div>

                                <p className="text-center mt-8 text-sm text-gray-600">
                                    ¿Ya tienes una cuenta?{" "}
                                    <Link to="/login"
                                        className="font-bold text-purple-600 hover:text-purple-700"
                                    >
                                        Iniciar Sesión
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
