import './Admin.css'
import { useContext, useEffect } from "react"
import { SalasContext } from "../../context/salasContext"
import { UsuarioContext } from "../../context/usuarioContext"
import { Link, useNavigate } from 'react-router'
import { FormUsuario } from './FormUsuario'
import { FormSala } from './FormSalas'
import { FichaSala } from './FichaSala'
import { FichaUsuario } from './FichaUsuario'


export const Admin = () => {
  const { salas } = useContext(SalasContext)
  const { usuarios } = useContext(UsuarioContext)

  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  useEffect(() => {
    const userParsed = JSON.parse(user)
    if (!user || userParsed.rol !== 'admin')
    {
      navigate('/login')
    }
  }, [])

  return (
    <section className='admin-page'>
      <section>
        <h2>Administrador</h2>
        <Link to={'/chat'}>Ir a chats</Link>
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