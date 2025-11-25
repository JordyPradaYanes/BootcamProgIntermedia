import { Link } from "react-router-dom";

function HomeHooks() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Ejemplos de Hooks en React</h1>
            
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-black colo">
                        <tr>
                            <th className="py-3 px-4 text-left font-semibold text-white border-b">Hook</th>
                            <th className="py-3 px-4 text-left font-semibold text-white border-b">Ruta</th>
                            <th className="py-3 px-4 text-left font-semibold text-white border-b">Descripcion</th>
                            <th className="py-3 px-4 text-left font-semibold text-white border-b">Categoria</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">useState</td>
                            <td className="py-3 px-4">
                                <div className="cursor-pointer bg-blue-500 text-white px-4 w-[120px] py-2 rounded">
                                    <Link to="/UseState">Ir a Ejemplo</Link>
                                </div>
                            </td>
                            <td className="py-3 px-4">Permite añadir estado a componentes funcionales.</td>
                            <td className="py-3 px-4">Estado</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">useNavigate</td>
                            <td className="py-3 px-4">
                                <div className="cursor-pointer bg-blue-500 text-white px-4 w-[120px] py-2 rounded">
                                    <Link to="/HookUseNavigate">Ir a Ejemplo</Link>
                                </div>
                            </td>
                            <td className="py-3 px-4">Permite navegar programáticamente entre rutas.</td>
                            <td className="py-3 px-4">Navegacion</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">UseEffect</td>
                            <td className="py-3 px-4">
                                <div className="cursor-pointer bg-blue-500 text-white px-4 w-[120px] py-2 rounded">
                                    <Link to="/UseEffect">Ir a Ejemplo</Link>
                                </div>
                            </td>
                            <td className="py-3 px-4">Permite añadir efectos a componentes funcionales.</td>
                            <td className="py-3 px-4">Efectos</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4">Categorias y hooks oficiales (React 19):</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Debug:</strong> useDebugValue, useSyncExternalStore</li>
                    <li><strong>Estado:</strong> useState, useReducer, useActionState</li>
                    <li><strong>Referencia:</strong> useRef, useImperativeHandle</li>
                    <li><strong>Efectos / ciclo de vida:</strong> useEffect, useLayoutEffect, useInsertionEffect</li>
                    <li><strong>Performance:</strong> useMemo, useCallback, useTransition, useDeferredValue</li>
                    <li><strong>Contexto y datos externos:</strong> useContext, useSyncExternalStore, useId</li>
                    <li><strong>Otro:</strong> useDebugValue, useId, useSyncExternalStore</li>
                </ul>
                <div className="text-gray-600 mt-4 flex italic">En React 19 existen ahora - <p className="font-bold mx-1">19 hooks oficiales.</p> Además, puedes crear <p className="font-bold mx-1">Custom Hooks</p> combinando los existentes para encapsular lógica reutilizable entre componentes.</div>
            </div>
        </div>
    )
}

export default HomeHooks;