import { useContext, useState, type FormEvent } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"
import type { Id } from "../../../types"

type FormProps = { id: Id, cerrar: () => void }
export const FormEdit = ({ id, cerrar } : FormProps) => {
  const { editarUsuario, usuario } = useContext(UsuarioContext)
  const [inputFoto, setFoto] = useState(usuario?.foto)
  const [inputContra, setContra] = useState(usuario?.contra)

  // AQUI OTRO DEPRECATED
  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!inputContra || ! inputFoto) return

    editarUsuario(inputContra, inputFoto, id)
    cerrar()
  }

  return (
    <section>
      <h4>Form Edit</h4>
      <form onSubmit={handleSubmit} className="form-edit-user">
        <input
          type='text'
          value={inputFoto}
          onChange={(e) => setFoto(e.target.value)}
        />
        <input
          type='text'
          value={inputContra}
          onChange={(e) => setContra(e.target.value)}
        />
        <button>Cambiar</button>
      </form>
    </section>
  )
}