import { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';

// Crear contextos
const ThemeContext = createContext();
const UserContext = createContext();
const LanguageContext = createContext();

function UseContext() {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({ name: 'Jordy Prada', role: 'Estudiante' });
    const [language, setLanguage] = useState('es');

    const translations = {
        es: {
            title: 'Hook useContext',
            subtitle: 'Compartir datos entre componentes sin prop drilling',
            theme: 'Tema',
            light: 'Claro',
            dark: 'Oscuro',
            user: 'Usuario',
            language: 'Idioma',
            spanish: 'Español',
            english: 'Inglés'
        },
        en: {
            title: 'useContext Hook',
            subtitle: 'Share data between components without prop drilling',
            theme: 'Theme',
            light: 'Light',
            dark: 'Dark',
            user: 'User',
            language: 'Language',
            spanish: 'Spanish',
            english: 'English'
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                <LanguageContext.Provider value={{ language, setLanguage, translations }}>
                    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <HeaderComponent />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <ThemeCard />
                                <UserCard />
                            </div>
                            <LanguageCard />
                            <InfoCard />
                        </div>
                    </div>
                </LanguageContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

function HeaderComponent() {
    const { language, translations } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const t = translations[language];

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-md p-6 mb-6 border transition-colors`}>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {t.title}
                    </h1>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
                        {t.subtitle}
                    </p>
                </div>
                <Link
                    to="/HomeHooks"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                    ← Volver
                </Link>
            </div>
        </div>
    );
}

function ThemeCard() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-md p-6 border transition-colors`}>
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <span className="text-2xl">🎨</span>
                {t.theme}
            </h2>
            <div className="space-y-4">
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                    Tema actual: <span className="font-semibold">{theme === 'dark' ? t.dark : t.light}</span>
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={() => setTheme('light')}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                            theme === 'light'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        ☀️ {t.light}
                    </button>
                    <button
                        onClick={() => setTheme('dark')}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                            theme === 'dark'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        🌙 {t.dark}
                    </button>
                </div>
                <div className={`p-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg`}>
                    <code className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        const &#123; theme, setTheme &#125; = useContext(ThemeContext);
                    </code>
                </div>
            </div>
        </div>
    );
}

function UserCard() {
    const { user } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-md p-6 border transition-colors`}>
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <span className="text-2xl">👤</span>
                {t.user}
            </h2>
            <div className="space-y-4">
                <div className={`p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'} rounded-lg border-l-4 border-blue-600`}>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm mb-1`}>Nombre</p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold`}>{user.name}</p>
                </div>
                <div className={`p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'} rounded-lg border-l-4 border-blue-600`}>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm mb-1`}>Rol</p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold`}>{user.role}</p>
                </div>
                <div className={`p-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg`}>
                    <code className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        const &#123; user &#125; = useContext(UserContext);
                    </code>
                </div>
            </div>
        </div>
    );
}

function LanguageCard() {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const t = translations[language];

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-md p-6 border transition-colors mb-6`}>
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <span className="text-2xl">🌐</span>
                {t.language}
            </h2>
            <div className="flex gap-3">
                <button
                    onClick={() => setLanguage('es')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                        language === 'es'
                            ? 'bg-green-600 text-white'
                            : theme === 'dark'
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    🇪🇸 {t.spanish}
                </button>
                <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                        language === 'en'
                            ? 'bg-green-600 text-white'
                            : theme === 'dark'
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    🇺🇸 {t.english}
                </button>
            </div>
        </div>
    );
}

function InfoCard() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-500'} border-l-4 p-6 rounded-lg`}>
            <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-600'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h3 className={`font-bold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} mb-2`}>
                        ¿Qué es useContext?
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'} text-sm`}>
                        useContext permite compartir valores entre componentes sin necesidad de pasar props manualmente en cada nivel (prop drilling). 
                        Es ideal para datos globales como tema, idioma, usuario autenticado, etc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UseContext;