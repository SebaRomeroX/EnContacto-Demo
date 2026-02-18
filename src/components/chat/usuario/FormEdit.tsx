import { useContext, useState } from "react"
import { UsuarioContext } from "../../../context/usuarioContext"

export const FormEdit = ({ id, cerrar }) => {
  const { editarUsuario, usuario } = useContext(UsuarioContext)
  const [inputFoto, setFoto] = useState(usuario.foto)
  const [inputContra, setContra] = useState(usuario.contra)

  function handleSubmit (e) {
    e.preventDefault()
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