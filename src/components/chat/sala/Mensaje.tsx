import { useContext } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"

export const Mensaje = ({ msj }) => {
  const { usuarios } = useContext(UsuarioContext)

  function getUserName (id) {
    const user = usuarios.find(user => user.id === id)
    return user
      ? { foto: user.foto, nombre: user.nombre}
      : { foto: 'undefined', nombre: 'eliminado'}
  }

  const datos = getUserName(msj.usuarioId)
  const mensaje = msj.mensaje
  
  return (
    <li>
      <img src={`https://unavatar.io/${datos.foto}`}/>
      <section className='mensaje'>
        <h4>{datos.nombre}</h4>
        <p>{mensaje}</p>
      </section>
    </li>
  )
}