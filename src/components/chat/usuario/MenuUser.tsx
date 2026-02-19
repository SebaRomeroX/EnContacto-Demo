import { useContext, useState } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"
import { SalasContext } from "../../../context/salasContext"
import { useNavigate } from "react-router"
import { FormEdit } from "./FormEdit"
import type { Usuario } from "../../../mock"

type MenuProps = { usuario: Usuario }
export const MenuUser = ({ usuario }: MenuProps) => {
  const { logout } = useContext(UsuarioContext)
  const { asignarSala } = useContext(SalasContext)
  const navigate = useNavigate()
  const [editar, setEditar] = useState(false)

  function handleLogout () {
    asignarSala(0)
    logout()
    navigate('/login')
  }

  function handleAdmin () {
    asignarSala(0)
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