import { useContext } from "react"
import { UsuarioContext } from "../../context/usuarioContext"
import type { Usuario } from "../../types/types"

type FichaProps = { usuario: Usuario }
export const FichaUsuario = ({ usuario }: FichaProps) => {
  const { eliminarUsuario } = useContext(UsuarioContext)

  if (usuario.rol === 'admin') return
  
  return (
    <li>
      <img src={`https://unavatar.io/${usuario.foto}`}/>
      <section>
        <h4>{usuario.nombre}</h4>
        <p>#{usuario.id}</p>
      </section>
      <section className='botones'>
        <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
      </section>
    </li>
  )
}