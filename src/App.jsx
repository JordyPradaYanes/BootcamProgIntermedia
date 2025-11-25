import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import ForgotPage from './pages/ForgotPage/ForgotPage'
import ResetPage from './pages/ResetPage/ResetPage'
import HomeHooks from './playground/HomeHooks'
import UseState from './playground/UseState'
import HookUseNavigate from './playground/HookUseNavigate'
import UseEffect from './playground/UseEffect'
import UseContext from './playground/UseContext'
import UseReducer from './playground/UseReducer'
import UseRef from './playground/UseRef'
import UseCallback from './playground/UseCallback'
import UseMemo from './playground/UseMemo'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/reset" element={<ResetPage />} />
        {/* Rutas de playground para Hooks */}
        <Route path="/HomeHooks" element={<HomeHooks />} />
        <Route path='/UseState' element={<UseState />} />
        <Route path="/HookUseNavigate" element={<HookUseNavigate />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/UseContext" element={<UseContext />} />
        <Route path="/UseReducer" element={<UseReducer />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route path="/UseCallback" element={<UseCallback />} />
        <Route path="/UseMemo" element={<UseMemo />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App