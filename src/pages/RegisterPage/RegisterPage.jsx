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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setIsLoading(true);

        setTimeout(() => {
            const result = saveUserToDB(formData);
            
            if (result.success) {
                console.log("Form submitted and saved:", formData);
                alert("Registro exitoso! Redirigiendo al login...");
                navigate("/");
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
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    }

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "El correo es requerido";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "El formato del correo no es válido";
        } else if (checkEmailExists(formData.email)) {
            newErrors.email = "El correo ya está registrado";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!formData.password) {
            newErrors.password = "La contraseña es requerida";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "La confirmación de contraseña es requerida";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }

        if (!formData.checked) {
            newErrors.checked = "Debes aceptar los términos y condiciones";
        }

        return newErrors;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl flex shadow-xl rounded-lg overflow-hidden bg-white">
                {/* Lado izquierdo - Información corporativa */}
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
                            Únete a nosotros
                        </h1>
                        <p className="text-gray-300 text-lg mb-8">
                            Crea tu cuenta y comienza tu camino hacia el desarrollo profesional
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Registro rápido</h3>
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
                                    <h3 className="text-white font-semibold">Acceso completo</h3>
                                    <p className="text-gray-400 text-sm">A todos los recursos del bootcamp</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Certificación</h3>
                                    <p className="text-gray-400 text-sm">Al completar el programa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-gray-400 text-sm">
                        <p>© 2025 UFPSO. Todos los derechos reservados.</p>
                    </div>
                </div>

                {/* Lado derecho - Formulario */}
                <div className="flex-1 p-8 lg:p-12 overflow-y-auto max-h-screen">
                    <div className="max-w-md mx-auto">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Crear Cuenta
                            </h2>
                            <p className="text-gray-600">Completa el formulario para registrarte</p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Nombre Completo */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    placeholder="Juan Pérez"
                                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    placeholder="ejemplo@correo.com"
                                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* Contraseña */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Contraseña
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

                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="checked"
                                        checked={formData.checked}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">
                                        Acepto los{" "}
                                        <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                                            términos y condiciones
                                        </a>
                                    </label>
                                </div>
                                {errors.checked && <p className="text-red-500 text-xs mt-1 ml-6">{errors.checked}</p>}
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
                                        Procesando...
                                    </>
                                ) : (
                                    "Crear Cuenta"
                                )}
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-center text-sm text-gray-600">
                                ¿Ya tienes una cuenta?{" "}
                                <Link to="/"
                                    className="text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    Iniciar Sesión
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
