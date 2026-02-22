import { useContext, useState, type FormEvent } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"
import type { Id } from "../../../types/types"

type FormProps = { id: Id, cerrar: () => void }
export const FormEdit = ({ id, cerrar } : FormProps) => {
  const { editarUsuario, usuario } = useContext(UsuarioContext)
  const [inputFoto, setFoto] = useState(usuario?.foto)
  const [inputContra, setContra] = useState(usuario?.contra)

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!inputContra || ! inputFoto) return

    editarUsuario(inputContra, inputFoto, id)
    cerrar()
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="formulario">
        <legend>Editar Perfil</legend>
        <input
          type='text'
          value={inputFoto}
          onChange={(e) => setFoto(e.target.value)}
          className='input-texto'
        />
        <input
          type='text'
          value={inputContra}
          onChange={(e) => setContra(e.target.value)}
          className='input-texto'
        />
        <button className="boton">Cambiar</button>
      </form>
    </section>
  )
}