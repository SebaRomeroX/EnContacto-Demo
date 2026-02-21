import { useContext, useState } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"
import { SalasContext } from "../../../context/salasContext"
import { useNavigate } from "react-router"
import { FormEdit } from "./FormEdit"
import { RUTAS } from "../../../constants/consts"
import type { Usuario } from "../../../types/types"

type MenuProps = { usuario: Usuario }
export const MenuUser = ({ usuario }: MenuProps) => {
  const { logout } = useContext(UsuarioContext)
  const { asignarSala } = useContext(SalasContext)
  const navigate = useNavigate()
  const [editar, setEditar] = useState(false)

  const idInvalido = 'sala-0-0-0-0-0'
  function handleLogout () {
    asignarSala(idInvalido)
    logout()
    navigate(RUTAS.login)
  }

  function handleAdmin () {
    asignarSala(idInvalido)
    navigate(RUTAS.admin)
  }

  return (
    editar
      ? <FormEdit id={usuario.id} cerrar={() => setEditar(false)} />
      : <section className='botones'>
        <button onClick={() => setEditar(true)}>Editar</button>
        { usuario.rol === 'admin' &&
          <button className="link" onClick={handleAdmin}>Admin</button>
        }
        <button className="link" onClick={handleLogout}>Cerrar Sesion</button>
      </section>
  )
}