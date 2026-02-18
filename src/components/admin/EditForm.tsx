import { useContext, useState } from "react"
import { SalasContext } from "../../context/salasContext"

export const EditForm = ({ nombre, id, ocultar }) => {
  const { cambiarNombre } = useContext(SalasContext)
  const [input, setInput] = useState(nombre)

  function hanldeSubmit (e) {
    e.preventDefault()
    cambiarNombre(input , id)
    ocultar()
  }

  return (
    <form onSubmit={hanldeSubmit}>
      <input
        type="text"
        value={input}
        placeholder='Nuevo nombre'
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button>Cambiar</button>
    </form>
  )
}