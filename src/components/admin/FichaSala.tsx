import { useContext, useState } from "react"
import { SalasContext } from "../../context/salasContext"
import { EditForm } from './EditForm'
import type { Id } from "../../types/types"

type FichaProp = { nombre: string, id: Id }
export const FichaSala = ({ nombre, id }: FichaProp) => {
  const { eliminarSala, vaciarChat } = useContext(SalasContext)
  const [editar, setEditar] = useState(false)

  return (
    <li>
      <section>
        <h4>{nombre}</h4>
        <p>#{id}</p>
      </section>
      <section className='botones'>
        <button onClick={() => eliminarSala(id)}>Eliminar</button>
        <button onClick={() => vaciarChat(id)}>Vaciar Chat</button>
      </section>
      <section className='botones'>
        { editar
          ? <EditForm nombre={nombre} id={id} ocultar={() => setEditar(false)} />
          : <button onClick={() => setEditar(true)}>cambiar nombre</button>
        }
      </section>
  </li>
  )
}