import { createContext, useState } from 'react'
import { SALAS } from '../mock'

export const SalasContext = createContext()

export const SalasProvider = ({ children }) => {
  const [salas, setSalas] = useState(SALAS) // O modificar este ...
  const [sala, setSala] = useState() // <- modificar este nombre para evitar confuciones

  function asignarSala (id) {
    const newSala = salas.find(salaDB => salaDB.id === id)
    setSala(newSala)
  }
  
  function agregarMensaje (texto, id) {
    const newMensaje = { usuarioId: id, mensaje: texto }

    const newChat = [...sala.chat, newMensaje]

    setSala({...sala, chat: newChat})
  }

  function eliminarSala (id) {
    const newSalas = salas.filter(sala => sala.id !== id)
    setSalas(newSalas)
  }

  function crearSala (nombre) {
    if (salas.find(sala => sala.nombre === nombre)) return

    const ultimoId = salas[salas.length -1].id
    const newId = ultimoId + 1
    const newSala = { nombre, id: newId, chat: [] }
    setSalas([...salas, newSala])
  }

  function vaciarChat (id) {
    const newSalas = salas.map(sala => {
      if (sala.id === id) {
        return {...sala, chat: []}
      }
      return sala
    })

    setSalas(newSalas)
  }

  function cambiarNombre (nombre, id) {
    const newSalas = salas.map(sala => {
      if (sala.id === id) {
        return {...sala, nombre}
      }
      return sala
    })

    setSalas(newSalas)
  }

  return (
    <SalasContext.Provider value={{
      sala,
      agregarMensaje,
      asignarSala,
      salas,
      eliminarSala,
      crearSala,
      vaciarChat,
      cambiarNombre
    }}>
      {children}
    </SalasContext.Provider>
  )
}