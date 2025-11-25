# 🚀 Bootcamp Programación Intermedia - Proyecto Clases

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📋 Descripción

Proyecto educativo desarrollado durante el **Bootcamp de Programación Intermedia** de la **Universidad Francisco de Paula Santander Ocaña (UFPSO)**. Este proyecto es una aplicación web moderna construida con React que demuestra el dominio de conceptos fundamentales de desarrollo frontend, incluyendo hooks de React, enrutamiento, gestión de estado y diseño responsive con Tailwind CSS.

## ✨ Características Principales

### 🎯 Sistema de Autenticación Completo

- **Login Page**: Página de inicio de sesión con validación de formularios y autenticación
- **Register Page**: Registro de nuevos usuarios con validación completa
  - Validación de email único
  - Validación de contraseña segura (8+ caracteres, mayúscula, minúscula, número, carácter especial)
  - Confirmación de contraseña
  - Aceptación de términos y condiciones
- **Forgot Password**: Recuperación de contraseña
  - Verificación de email existente
  - Simulación de envío de correo (⚠️ **Nota**: No envía correos reales, solo simula el proceso)
  - Redirección automática a página de restablecimiento
- **Reset Password**: Restablecimiento de contraseña
  - Validación de contraseña en tiempo real con indicadores visuales
  - Verificación de requisitos de seguridad
  - Actualización de contraseña en localStorage
- **Dashboard**: Panel de control protegido para usuarios autenticados
  - Muestra información del usuario
  - Estadísticas y actividad reciente
  - Acciones rápidas y navegación

### 🎓 Playground de React Hooks

Sección educativa con ejemplos interactivos de los principales hooks de React:

#### 📌 **useState**

- Contador interactivo con incremento/decremento
- Cambiador de colores dinámico
- Gestión de estado local en componentes funcionales

#### ⚡ **useEffect**

- **Reloj en tiempo real**: Actualización continua con `setInterval` y cleanup
- **Contador de caracteres**: Efecto basado en dependencias
- **Simulación de API**: Carga asíncrona de datos con estados de loading
- **Contador de visitas**: Efecto ejecutado al montar el componente
- **Cambio de título**: Manipulación del DOM con cleanup

#### 🧭 **useNavigate**

- Navegación programática entre rutas
- Ejemplos de redirección y manejo de historial

#### 🌐 **useContext**

- Compartir datos entre componentes sin prop drilling
- Ejemplo de tema (dark/light mode)
- Sistema de internacionalización (español/inglés)
- Gestión de usuario global

#### 📊 **useReducer**

- Gestión de estado complejo con acciones
- Contador con múltiples acciones (incrementar, decrementar, reset)
- Lista de tareas (TODO list) con estadísticas
- Comparación con useState

#### 🚀 **useMemo**

- Optimización de cálculos costosos
- Comparación de rendimiento (con/sin memoización)
- Filtrado de números con memoización
- Indicadores visuales de recálculo en consola

#### 🔄 **useCallback**

- Memoización de funciones
- Comparación de rendimiento con React.memo
- Ejemplos con y sin useCallback
- Funciones con parámetros

#### 🔗 **useRef**

- Referencias a elementos DOM (focus input)
- Contador de renders sin causar re-renders
- Guardar valores anteriores
- Gestión de timers/intervals (cronómetro)

### 🎨 Diseño Profesional y Corporativo

- **Paleta de colores corporativa**: Azul (`blue-600`), gris oscuro (`slate-800`), blanco
- **Diseño minimalista**: Espacios blancos generosos, tipografía clara
- **Consistencia visual**: Mismo estilo en todas las páginas
- **Responsive**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Accesibilidad**: Alto contraste y legibilidad
- **Animaciones sutiles**: Transiciones suaves y efectos hover profesionales
- **Iconos SVG**: Monocromáticos y consistentes

## 🛠️ Tecnologías Utilizadas

| Tecnología           | Versión | Propósito                            |
| -------------------- | ------- | ------------------------------------ |
| **React**            | 19.2.0  | Biblioteca principal para UI         |
| **Vite**             | 7.2.4   | Build tool y dev server ultrarrápido |
| **Tailwind CSS**     | 4.1.17  | Framework de CSS utility-first       |
| **React Router DOM** | 7.9.6   | Enrutamiento y navegación            |
| **ESLint**           | 9.39.1  | Linter para calidad de código        |
| **PostCSS**          | 8.5.6   | Procesador de CSS                    |

## 📁 Estructura del Proyecto

```
ProyectoClases/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── pages/
│   │   ├── DashboardPage/
│   │   │   └── DashboardPage.jsx
│   │   ├── ForgotPage/
│   │   │   └── ForgotPage.jsx
│   │   ├── LoginPage/
│   │   │   └── LoginPage.jsx
│   │   ├── RegisterPage/
│   │   │   └── RegisterPage.jsx
│   │   └── ResetPage/
│   │       └── ResetPage.jsx
│   ├── playground/
│   │   ├── HomeHooks.jsx          # Menú principal de hooks
│   │   ├── HookUseNavigate.jsx    # Ejemplos de useNavigate
│   │   ├── UseEffect.jsx          # Ejemplos de useEffect
│   │   └── UseState.jsx           # Ejemplos de useState
│   ├── services/
│   │   └── db.js                  # Simulación de base de datos
│   ├── App.css
│   ├── App.jsx                    # Componente principal con rutas
│   ├── index.css                  # Estilos globales y Tailwind
│   └── main.jsx                   # Punto de entrada
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/JordyPradaYanes/BootcamProgIntermedia.git
cd ProyectoClases
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

### Scripts Disponibles

| Comando           | Descripción                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo        |
| `npm run build`   | Genera el build de producción           |
| `npm run preview` | Previsualiza el build de producción     |
| `npm run lint`    | Ejecuta ESLint para verificar el código |

## 🎯 Rutas de la Aplicación

| Ruta               | Componente      | Descripción                    |
| ------------------ | --------------- | ------------------------------ |
| `/`                | LoginPage       | Página de inicio de sesión     |
| `/register`        | RegisterPage    | Registro de nuevos usuarios    |
| `/forgot`          | ForgotPage      | Recuperación de contraseña     |
| `/reset`           | ResetPage       | Restablecimiento de contraseña |
| `/dashboard`       | DashboardPage   | Panel de control               |
| `/HomeHooks`       | HomeHooks       | Menú de ejemplos de hooks      |
| `/UseState`        | UseState        | Ejemplos de useState           |
| `/UseEffect`       | UseEffect       | Ejemplos de useEffect          |
| `/HookUseNavigate` | HookUseNavigate | Ejemplos de useNavigate        |

## 📚 Conceptos Aprendidos

### React Fundamentals

- ✅ Componentes funcionales
- ✅ Props y composición
- ✅ Renderizado condicional
- ✅ Listas y keys

### React Hooks

- ✅ **useState**: Gestión de estado local
- ✅ **useEffect**: Efectos secundarios y ciclo de vida
- ✅ **useNavigate**: Navegación programática

### Routing

- ✅ Configuración de rutas con React Router
- ✅ Navegación entre páginas
- ✅ Rutas protegidas

### Styling

- ✅ Tailwind CSS utility classes
- ✅ Responsive design
- ✅ Gradientes y animaciones
- ✅ Dark mode

### Best Practices

- ✅ Estructura de carpetas organizada
- ✅ Componentes reutilizables
- ✅ Código limpio y mantenible
- ✅ Control de versiones con Git

## 🎨 Paleta de Colores Corporativa

El proyecto utiliza una paleta de colores profesional y corporativa:

- **Primary**: Azul (`blue-600`, `blue-700`)
- **Dark Background**: Gris oscuro (`slate-800`)
- **Light Background**: Gris claro (`gray-50`)
- **Cards**: Blanco (`white`)
- **Text Primary**: Gris oscuro (`gray-900`)
- **Text Secondary**: Gris medio (`gray-600`)
- **Borders**: Gris claro (`gray-200`, `gray-300`)
- **Success**: Verde (`green-600`)
- **Error**: Rojo (`red-500`, `red-600`)

## ⚠️ Notas Importantes

### Almacenamiento de Datos

- **LocalStorage**: Los datos de usuarios se almacenan en `localStorage` del navegador
  - `users_db`: Array de usuarios registrados
  - `current_user`: Sesión del usuario actual
- **⚠️ Seguridad**: Las contraseñas se almacenan en **texto plano** (solo para fines educativos)
  - En producción, las contraseñas deben ser hasheadas (bcrypt, argon2, etc.)
  - Nunca almacenar contraseñas en texto plano en aplicaciones reales

### Limitaciones

- **Email**: El sistema **NO envía correos reales**
  - La funcionalidad de "Forgot Password" solo simula el envío
  - Para enviar correos reales, se necesita un backend con servicios como:
    - SendGrid
    - Nodemailer
    - AWS SES
    - Mailgun
- **Base de datos**: No hay base de datos real, solo localStorage
- **Backend**: No hay servidor backend, todo es frontend

### Recomendaciones para Producción

Si deseas llevar este proyecto a producción, considera:

1. **Backend**: Implementar un servidor (Node.js, Python, etc.)
2. **Base de datos**: PostgreSQL, MongoDB, MySQL
3. **Autenticación**: JWT tokens, OAuth, Auth0
4. **Hashing de contraseñas**: bcrypt, argon2
5. **Envío de emails**: SendGrid, Nodemailer
6. **Hosting**: Vercel, Netlify, AWS, Heroku

## 👨‍💻 Autor

**Jordy Prada Yanes**

- GitHub: [@JordyPradaYanes](https://github.com/JordyPradaYanes)
- Universidad: Universidad Francisco de Paula Santander Ocaña (UFPSO)
- Programa: Bootcamp Programación Intermedia - 8vo Semestre

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- A los profesores del Bootcamp de Programación Intermedia de la UFPSO
- A la comunidad de React y Vite por sus excelentes herramientas
- A Tailwind CSS por facilitar el desarrollo de interfaces modernas

---

⭐ **Si este proyecto te fue útil, no olvides darle una estrella en GitHub!**

Desarrollado con ❤️ durante el Bootcamp de Programación Intermedia - UFPSO 2025
