import { Link, useNavigate } from "react-router-dom";

function HookUseNavigate() {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/HomeHooks");
    }

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-700">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Hook UseNavigate</h1>
                    <p className="text-slate-400">Explorando la navegación programática en React Router</p>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-indigo-500 transition-colors duration-300">
                        <p className="text-sm text-slate-300 mb-2">Navegación tradicional HTML</p>
                        <a 
                            href="/HomeHooks" 
                            className="block w-full text-center py-2.5 px-4 rounded-lg bg-slate-600 text-white hover:bg-slate-500 transition-all duration-200 font-medium"
                        >
                            Usando etiqueta &lt;a&gt;
                        </a>
                    </div>

                    <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-indigo-500 transition-colors duration-300">
                        <p className="text-sm text-slate-300 mb-2">Componente Link de React Router</p>
                        <Link 
                            to="/HomeHooks" 
                            className="block w-full text-center py-2.5 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 font-medium"
                        >
                            Usando etiqueta Link
                        </Link>
                    </div>

                    <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-indigo-500 transition-colors duration-300">
                        <p className="text-sm text-slate-300 mb-2">Hook useNavigate (Programático)</p>
                        <button 
                            onClick={handleNavigate}
                            className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 font-medium cursor-pointer"
                        >
                            Usando useNavigate()
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HookUseNavigate;
