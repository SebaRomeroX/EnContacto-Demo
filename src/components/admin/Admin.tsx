import './Admin.css'
import { useContext, useEffect } from "react"
import { SalasContext } from "../../context/salasContext"
import { UsuarioContext } from "../../context/usuarioContext"
import { Link, useNavigate } from 'react-router'
import { FormUsuario } from './FormUsuario'
import { FormSala } from './FormSalas'
import { FichaSala } from './FichaSala'
import { FichaUsuario } from './FichaUsuario'
import { RUTAS } from '../../consts'


export const Admin = () => {
  const { salas } = useContext(SalasContext)
  const { usuarios } = useContext(UsuarioContext)

  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  // REDUNDANCIA QUI NAVEGATE LOGIN
  useEffect(() => {
    if (!user) {
      navigate(RUTAS.login)
      return
    }

    const userParsed = JSON.parse(user)
    if (userParsed.rol !== 'admin')
    {
      navigate(RUTAS.login)
    }
  }, [])

  return (
    <section className='admin-page'>
      <section>
        <h2>Administrador</h2>
        <Link to={RUTAS.chat}>Ir a chats</Link>
      </section>

      <section>
        <h3>Usuarios</h3>
        <FormUsuario />
        <ul className='lista-admin'>
          { usuarios.map(usuario => <FichaUsuario usuario={usuario} /> )}
        </ul>
      </section>

      <section>
        <h3>Salas</h3>
        <FormSala />
        <ul className='lista-admin'>
          { salas.map(sala => (
            <FichaSala key={sala.id} nombre={sala.nombre} id={sala.id} />
          ))}
        </ul>
      </section>
    </section>
  )
}