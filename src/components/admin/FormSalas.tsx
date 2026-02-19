import { useContext, useState, type FormEvent } from 'react'
import { SalasContext } from '../../context/salasContext'

export const FormSala = () => {
  const { crearSala } = useContext(SalasContext)
  const [nombre, setNombre] = useState('')

  // DEPRECATED
  function handleCrear (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (nombre) {
      crearSala(nombre)
      setNombre('')
    }
  }

  return (
    <section>
      <h4>Nueva Sala</h4>
      <form onSubmit={handleCrear}>
        <input
          type="text"
          placeholder='Nombre de sala'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          required
        />
        <button className='boton'>Crear</button>
      </form>
    </section>
  )
}