import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../../services/db';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            navigate('/');
        } else {
            setUser(currentUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-900">UFPSO Bootcamp</h1>
                                <p className="text-xs text-gray-500">Panel de Control</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors font-medium flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tarjeta de Bienvenida */}
                <div className="bg-slate-800 rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Bienvenido, {user.name}</h2>
                            <p className="text-gray-300 mt-1">Gestiona tu cuenta y accede a tus recursos</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Información del Usuario */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Información del Usuario
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-600 pl-4 py-2">
                                <p className="text-sm text-gray-500 mb-1">Nombre Completo</p>
                                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4 py-2">
                                <p className="text-sm text-gray-500 mb-1">Correo Electrónico</p>
                                <p className="text-lg font-semibold text-gray-900">{user.email}</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4 py-2">
                                <p className="text-sm text-gray-500 mb-1">ID de Usuario</p>
                                <p className="text-lg font-semibold text-gray-900 font-mono">{user.id}</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4 py-2">
                                <p className="text-sm text-gray-500 mb-1">Fecha de Registro</p>
                                <p className="text-lg font-semibold text-gray-900">{formatDate(user.createdAt)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Acciones Rápidas */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Acciones Rápidas
                        </h3>
                        <div className="space-y-3">
                            <Link
                                to="/HomeHooks"
                                className="block p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-medium"
                            >
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <span>Playground Hooks</span>
                                </div>
                            </Link>
                            <button className="w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-900 font-medium">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Configuración</span>
                                </div>
                            </button>
                            <button className="w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-900 font-medium">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Documentación</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Total de Proyectos</p>
                                <p className="text-3xl font-bold text-gray-900">12</p>
                                <p className="text-xs text-gray-400 mt-1">+2 este mes</p>
                            </div>
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Completados</p>
                                <p className="text-3xl font-bold text-gray-900">8</p>
                                <p className="text-xs text-gray-400 mt-1">66.7% del total</p>
                            </div>
                            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">En Progreso</p>
                                <p className="text-3xl font-bold text-gray-900">4</p>
                                <p className="text-xs text-gray-400 mt-1">33.3% del total</p>
                            </div>
                            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actividad Reciente */}
                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Actividad Reciente
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Proyecto completado</p>
                                <p className="text-sm text-gray-500">Sistema de autenticación finalizado</p>
                                <p className="text-xs text-gray-400 mt-1">Hace 2 horas</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Nuevo proyecto creado</p>
                                <p className="text-sm text-gray-500">Dashboard administrativo iniciado</p>
                                <p className="text-xs text-gray-400 mt-1">Hace 1 día</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Actualización realizada</p>
                                <p className="text-sm text-gray-500">Perfil de usuario modificado</p>
                                <p className="text-xs text-gray-400 mt-1">Hace 3 días</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
