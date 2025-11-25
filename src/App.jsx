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

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ForgotPage" element={<ForgotPage />} />
        <Route path="/ResetPage" element={<ResetPage />} />
        {/* Rutas de playground para Hooks */}
        <Route path="/HomeHooks" element={<HomeHooks />} />
        <Route path='/UseState' element={<UseState />} />
        <Route path="/HookUseNavigate" element={<HookUseNavigate />} />
        <Route path="/UseEffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App