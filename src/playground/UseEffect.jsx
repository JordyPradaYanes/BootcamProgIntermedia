import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UseEffect() {
    // Estado para el reloj
    const [hora, setHora] = useState(new Date());
    
    // Estado para el contador de caracteres
    const [texto, setTexto] = useState('');
    const [contadorCaracteres, setContadorCaracteres] = useState(0);
    
    // Estado para la simulación de carga de datos
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(false);
    
    // Estado para el contador de visitas
    const [visitas, setVisitas] = useState(0);

    // useEffect 1: Reloj en tiempo real (se ejecuta continuamente)
    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        // Cleanup: limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, []); // Array vacío: solo se ejecuta al montar el componente

    // useEffect 2: Contador de caracteres (depende del estado 'texto')
    useEffect(() => {
        setContadorCaracteres(texto.length);
    }, [texto]); // Se ejecuta cada vez que 'texto' cambia

    // useEffect 3: Cambiar el título del documento
    useEffect(() => {
        document.title = `UseEffect - ${visitas} visitas`;
        
        return () => {
            document.title = 'Proyecto Clases'; // Restaurar título al desmontar
        };
    }, [visitas]);

    // useEffect 4: Incrementar visitas al montar el componente
    useEffect(() => {
        setVisitas(prev => prev + 1);
    }, []);

    // Función para simular carga de datos
    const cargarDatos = () => {
        setCargando(true);
        setDatos(null);

        // Simular una petición API con setTimeout
        setTimeout(() => {
            setDatos({
                usuario: 'Jordy',
                rol: 'Estudiante',
                curso: 'Bootcamp Programación Intermedia',
                timestamp: new Date().toLocaleString()
            });
            setCargando(false);
        }, 2000);
    };

    // useEffect 5: Cargar datos cuando se solicite
    useEffect(() => {
        if (cargando) {
            console.log('Cargando datos...');
        }
    }, [cargando]);

    const formatearHora = (fecha) => {
        return fecha.toLocaleTimeString('es-CO', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatearFecha = (fecha) => {
        return fecha.toLocaleDateString('es-CO', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-6xl w-full border border-purple-500/30">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                        Hook useEffect
                    </h1>
                    <p className="text-slate-300">Efectos secundarios y ciclo de vida en componentes funcionales</p>
                    <p className="text-purple-400 text-sm mt-2">Visitas: {visitas}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Ejemplo 1: Reloj en Tiempo Real */}
                    <div className="p-6 bg-gradient-to-br from-slate-700/50 to-purple-900/30 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all">
                        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">🕐</span>
                            Reloj en Tiempo Real
                        </h2>
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="text-5xl font-bold text-purple-400 font-mono">
                                {formatearHora(hora)}
                            </div>
                            <div className="text-sm text-slate-300 capitalize">
                                {formatearFecha(hora)}
                            </div>
                            <div className="mt-4 p-3 bg-slate-900/50 rounded-lg w-full">
                                <p className="text-xs text-slate-400 font-mono">
                                    useEffect(() =&gt; &#123;<br/>
                                    &nbsp;&nbsp;const interval = setInterval(...);<br/>
                                    &nbsp;&nbsp;return () =&gt; clearInterval(interval);<br/>
                                    &#125;, []);
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ejemplo 2: Contador de Caracteres */}
                    <div className="p-6 bg-gradient-to-br from-slate-700/50 to-blue-900/30 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all">
                        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">✍️</span>
                            Contador de Caracteres
                        </h2>
                        <div className="flex flex-col space-y-4">
                            <textarea
                                value={texto}
                                onChange={(e) => setTexto(e.target.value)}
                                placeholder="Escribe algo aquí..."
                                className="w-full p-3 bg-slate-900/50 text-white rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none resize-none h-24"
                            />
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300">Caracteres:</span>
                                <span className={`text-2xl font-bold ${contadorCaracteres > 50 ? 'text-red-400' : 'text-blue-400'}`}>
                                    {contadorCaracteres}
                                </span>
                            </div>
                            <div className="p-3 bg-slate-900/50 rounded-lg">
                                <p className="text-xs text-slate-400 font-mono">
                                    useEffect(() =&gt; &#123;<br/>
                                    &nbsp;&nbsp;setContador(texto.length);<br/>
                                    &#125;, [texto]);
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ejemplo 3: Simulación de Carga de Datos */}
                    <div className="p-6 bg-gradient-to-br from-slate-700/50 to-emerald-900/30 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all">
                        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">📡</span>
                            Carga de Datos (API Simulada)
                        </h2>
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={cargarDatos}
                                disabled={cargando}
                                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                    cargando 
                                        ? 'bg-slate-600 cursor-not-allowed' 
                                        : 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/50'
                                } text-white`}
                            >
                                {cargando ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="animate-spin">⏳</span>
                                        Cargando...
                                    </span>
                                ) : (
                                    'Cargar Datos'
                                )}
                            </button>
                            
                            {datos && (
                                <div className="p-4 bg-slate-900/50 rounded-lg border border-emerald-500/30 animate-fade-in">
                                    <h3 className="text-emerald-400 font-semibold mb-2">Datos Recibidos:</h3>
                                    <div className="space-y-1 text-sm text-slate-300">
                                        <p><strong>Usuario:</strong> {datos.usuario}</p>
                                        <p><strong>Rol:</strong> {datos.rol}</p>
                                        <p><strong>Curso:</strong> {datos.curso}</p>
                                        <p className="text-xs text-slate-500">{datos.timestamp}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Ejemplo 4: Información sobre useEffect */}
                    <div className="p-6 bg-gradient-to-br from-slate-700/50 to-orange-900/30 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all">
                        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">📚</span>
                            Casos de Uso
                        </h2>
                        <div className="space-y-3 text-sm text-slate-300">
                            <div className="p-3 bg-slate-900/50 rounded-lg">
                                <h3 className="text-orange-400 font-semibold mb-1">Sin dependencias []</h3>
                                <p className="text-xs">Se ejecuta solo al montar el componente</p>
                            </div>
                            <div className="p-3 bg-slate-900/50 rounded-lg">
                                <h3 className="text-orange-400 font-semibold mb-1">Con dependencias [var]</h3>
                                <p className="text-xs">Se ejecuta cuando cambian las variables especificadas</p>
                            </div>
                            <div className="p-3 bg-slate-900/50 rounded-lg">
                                <h3 className="text-orange-400 font-semibold mb-1">Sin array</h3>
                                <p className="text-xs">Se ejecuta en cada renderizado (¡cuidado!)</p>
                            </div>
                            <div className="p-3 bg-slate-900/50 rounded-lg">
                                <h3 className="text-orange-400 font-semibold mb-1">Cleanup function</h3>
                                <p className="text-xs">return () =&gt; &#123;...&#125; para limpiar efectos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link 
                        to="/HomeHooks" 
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-purple-500/50"
                    >
                        ← Volver al Menú
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UseEffect;