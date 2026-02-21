import { BrowserRouter, Link, Route, Routes } from 'react-router'
import './App.css'
import { Login } from './components/login/Login'
import { PaginaChats } from './components/chat/PaginaChats'
import { Admin } from './components/admin/Admin'
import { RUTAS } from './consts'

const Home = () => {
  return (
    <section className='home-page'>
      <h1>Bienvenid@ a la app de comunicaciones</h1>
      <p>Esta es una plataforma que provee distintas salas de chat</p>
      <p>El perfil de administrador te permitira agregar y eliminar usuarios y salas</p>
      <Link className='link' to={RUTAS.login}>Iniciar Sesion</Link>
    </section>
  )
}

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={RUTAS.landing} Component={Home} />
          <Route path={RUTAS.login} Component={Login} />
          <Route path={RUTAS.chat} Component={PaginaChats} />
          <Route path={RUTAS.admin} Component={Admin} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
