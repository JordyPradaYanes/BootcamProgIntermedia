import { Link } from "react-router-dom";

function HomeHooks() {
    const hooks = [
        {
            name: "useState",
            route: "/UseState",
            description: "Permite añadir estado a componentes funcionales",
            category: "Estado",
            icon: "📊",
            color: "blue"
        },
        {
            name: "useEffect",
            route: "/UseEffect",
            description: "Permite ejecutar efectos secundarios y gestionar el ciclo de vida",
            category: "Efectos",
            icon: "⚡",
            color: "orange"
        },
        {
            name: "useNavigate",
            route: "/HookUseNavigate",
            description: "Permite navegar programáticamente entre rutas",
            category: "Navegación",
            icon: "🧭",
            color: "green"
        },
        {
            name: "useContext",
            route: "/UseContext",
            description: "Permite compartir valores entre componentes",
            category: "Contexto",
            icon: "🌐",
            color: "red"
        },
        {
            name: "useReducer",
            route: "/UseReducer",
            description: "Permite gestionar estados más complejos",
            category: "Estado",
            icon: "📊",
            color: "purple"
        },
        {
            name: "useMemo",
            route: "/UseMemo",
            description: "Permite memoizar valores para optimizar rendimiento",
            category: "Performance",
            icon: "🚀",
            color: "blue"
        },
        {
            name: "useCallback",
            route: "/UseCallback",
            description: "Permite memoizar funciones para optimizar rendimiento",
            category: "Performance",
            icon: "🚀",
            color: "pink"
        },
        {
            name: "useRef",
            route: "/UseRef",
            description: "Permite crear referencias a valores",
            category: "Referencia",
            icon: "🔗",
            color: "yellow"
        }
    ];

    const categories = [
        {
            title: "Estado",
            hooks: ["useState", "useReducer", "useActionState"],
            icon: "📊"
        },
        {
            title: "Efectos / Ciclo de vida",
            hooks: ["useEffect", "useLayoutEffect", "useInsertionEffect"],
            icon: "⚡"
        },
        {
            title: "Referencia",
            hooks: ["useRef", "useImperativeHandle"],
            icon: "🔗"
        },
        {
            title: "Performance",
            hooks: ["useMemo", "useCallback", "useTransition", "useDeferredValue"],
            icon: "🚀"
        },
        {
            title: "Contexto y datos externos",
            hooks: ["useContext", "useSyncExternalStore", "useId"],
            icon: "🌐"
        },
        {
            title: "Debug",
            hooks: ["useDebugValue", "useSyncExternalStore"],
            icon: "🐛"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-600 hover:bg-blue-700 border-blue-500",
            purple: "bg-purple-600 hover:bg-purple-700 border-purple-500",
            green: "bg-green-600 hover:bg-green-700 border-green-500",
            yellow: "bg-yellow-600 hover:bg-yellow-700 border-yellow-500",
            red: "bg-red-600 hover:bg-red-700 border-red-500",
            pink: "bg-pink-600 hover:bg-pink-700 border-pink-500",
            brown: "bg-brown-600 hover:bg-brown-700 border-brown-500",
            orange: "bg-orange-600 hover:bg-orange-700 border-orange-500"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">React Hooks Playground</h1>
                            <p className="text-gray-600 mt-1">Ejemplos interactivos de los principales hooks de React</p>
                        </div>
                        <Link
                            to="/dashboard"
                            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors font-medium flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver al Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Ejemplos Disponibles */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejemplos Disponibles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hooks.map((hook) => (
                            <Link
                                key={hook.name}
                                to={hook.route}
                                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 overflow-hidden group"
                                style={{ borderLeftColor: `var(--${hook.color}-600)` }}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{hook.icon}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {hook.name}
                                                </h3>
                                                <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded mt-1">
                                                    {hook.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {hook.description}
                                    </p>
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${getColorClasses(hook.color)} text-white rounded-lg transition-colors text-sm font-medium`}>
                                        Ver Ejemplo
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Categorías de Hooks Oficiales */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Categorías de Hooks Oficiales</h2>
                            <p className="text-gray-600 text-sm">React 19 - 19 hooks oficiales</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map((category) => (
                            <div key={category.title} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">{category.icon}</span>
                                    <h3 className="font-bold text-gray-900">{category.title}</h3>
                                </div>
                                <ul className="space-y-1">
                                    {category.hooks.map((hook) => (
                                        <li key={hook} className="text-sm text-gray-600 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{hook}</code>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Información Adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-900 mb-2">¿Qué son los Hooks?</h3>
                                <p className="text-blue-800 text-sm">
                                    Los Hooks son funciones que permiten usar estado y otras características de React en componentes funcionales, sin necesidad de escribir clases.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-green-900 mb-2">Custom Hooks</h3>
                                <p className="text-green-800 text-sm">
                                    Puedes crear tus propios hooks personalizados combinando los hooks existentes para encapsular lógica reutilizable entre componentes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHooks;