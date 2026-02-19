import { useContext, useState, type FormEvent } from 'react'
import { UsuarioContext } from '../../context/usuarioContext'

export const FormUsuario = () => {
  const { crearUsuario } = useContext(UsuarioContext)
  const [nombre, setNombre] = useState('')
  const [foto, setFoto] = useState('')

  // AQUI OTRO DEPRECATED
  function handleCrear (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fotoParam = foto ? foto : 'null'

    if (!nombre) return
    crearUsuario(nombre, fotoParam)
    setNombre('')
    setFoto('')
  }

  return (
    <section>
      <h4>Nuevo Usuario</h4>
      <form onSubmit={handleCrear}>
        <input
          type="text"
          placeholder='Nombre de usuario'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder='Foto de usuario'
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />
        <button className='boton'>Crear</button>
      </form>
    </section>
  )
}