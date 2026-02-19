import { createContext, useState, type PropsWithChildren } from 'react'
import { type Sala, SALAS } from '../mock'

interface SalaContextType {
  sala: Sala | undefined;
  salas: Sala[];
  agregarMensaje: (texto: string, id: number) => void;
  asignarSala: (id: number) => void;
  eliminarSala: (id: number) => void;
  crearSala: (nombre: string) => void;
  vaciarChat: (id: number) => void;
  cambiarNombre: (nombre: string, id: number) => void;
}

const defaultContextValue: SalaContextType = {
  sala: undefined,
  salas: [],
  agregarMensaje: () => {},
  asignarSala: () => {},
  eliminarSala: () => {},
  crearSala: () => {},
  vaciarChat: () => {},
  cambiarNombre: () => {}
};

export const SalasContext = createContext<SalaContextType>(defaultContextValue);

export const SalasProvider = ({ children } : PropsWithChildren) => {
  const [salas, setSalas] = useState(SALAS) // O modificar este ...
  const [sala, setSala] = useState<Sala>() // <- modificar este nombre para evitar confuciones

  // id type Number !!!!!! hay que cambiar esto !!! algo mas confiable
  function asignarSala (id: number) {
    const newSala = salas.find(salaDB => salaDB.id === id)
    setSala(newSala)
  }
  
  function agregarMensaje (texto: string, id: number) {
    if (!sala) return

    const newMensaje = { usuarioId: id, mensaje: texto }
    
    const newChat = [...sala.chat, newMensaje]
    setSala({...sala, chat: newChat})
  }

  function eliminarSala (id: number) {
    const newSalas = salas.filter(sala => sala.id !== id)
    setSalas(newSalas)
  }

  function crearSala (nombre: string) {
    if (salas.find(sala => sala.nombre === nombre)) return

    const ultimoId = salas[salas.length -1].id
    const newId = ultimoId + 1
    const newSala = { nombre, id: newId, chat: [] }
    setSalas([...salas, newSala])
  }

  function vaciarChat (id: number) {
    const newSalas = salas.map(sala => {
      if (sala.id === id) {
        return {...sala, chat: []}
      }
      return sala
    })

    setSalas(newSalas)
  }

  function cambiarNombre (nombre: string, id: number) {
    const newSalas = salas.map(sala => {
      if (sala.id === id) {
        return {...sala, nombre}
      }
      return sala
    })

    setSalas(newSalas)
  }

  const value: SalaContextType = {
    sala,
    salas,
    agregarMensaje,
    asignarSala,
    eliminarSala,
    crearSala,
    vaciarChat,
    cambiarNombre
  };

  return (
    <SalasContext.Provider value={value}>
      {children}
    </SalasContext.Provider>
  )
}