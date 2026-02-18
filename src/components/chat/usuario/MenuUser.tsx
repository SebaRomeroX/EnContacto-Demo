import { useContext, useState } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"
import { SalasContext } from "../../../context/salasContext"
import { useNavigate } from "react-router"
import { FormEdit } from "./FormEdit"

export const MenuUser = ({ usuario }) => {
  const { logout } = useContext(UsuarioContext)
  const { asignarSala } = useContext(SalasContext)
  const navigate = useNavigate()
  const [editar, setEditar] = useState(false)

  function handleLogout () {
    asignarSala()
    logout()
    navigate('/login')
  }

  function handleAdmin () {
    asignarSala()
    navigate('/admin')
  }

  return (
    editar
      ? <FormEdit id={usuario.id} cerrar={() => setEditar(false)} />
      : <section className='botones'>
        <button onClick={() => setEditar(true)}>Editar</button>
        { usuario.rol === 'admin' &&
          <button className="link" onClick={handleAdmin}> Admin </button>
        }
        <button className="link" onClick={handleLogout}>Cerrar Sesion</button>
      </section>
  )
}