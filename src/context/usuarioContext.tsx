import { createContext, type PropsWithChildren } from 'react'
import { USUARIOS } from '../mock'
import { useState } from 'react'
import type { Id, UserRol, Usuario } from '../types'
import { crearNewId } from '../crearNewId'

interface UsuarioContextType {
  usuario: Usuario | undefined
  logear: (inputs: {user: string, pass: string}) => boolean | undefined
  logout: () => void
  usuarios: Usuario[]
  crearUsuario: (nombre: string, foto: string) => void
  eliminarUsuario: (id: Id) => void
  editarUsuario: (inputContra: string, inputFoto: string, id: Id) => void
}

const defaultContextValue: UsuarioContextType = {
  usuario: undefined,
  logear: () => false,
  logout: () => {},
  usuarios: [],
  crearUsuario: () => {},
  eliminarUsuario: () => {},
  editarUsuario: () => {},
};

export const UsuarioContext = createContext(defaultContextValue)

function getUsuario (admin: Usuario) {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : admin // para desarrollo // siempre logeado
  // return JSON.parse(user) // definitivo
}

export const UsuarioProvider = ({ children }: PropsWithChildren) => {
  const [usuarios, setUsuarios] = useState(USUARIOS)
  const [usuario, setUsuario] = useState(getUsuario(usuarios[3])) // temporal, desarrollo

    // REDUCER ??
  
  function logear (inputs: {user: string, pass: string}) {
    const newUsuario = usuarios.find(user =>
      user.nombre === inputs.user &&
      user.contra === inputs.pass
    )

    if (newUsuario) {
      localStorage.setItem('user', JSON.stringify(newUsuario))
      setUsuario(newUsuario)
      return true
    } 
  }

  function logout () {
    localStorage.removeItem('user')
    setUsuario(undefined)
  }

  function crearUsuario (nombre: string, foto: string) {
    if (usuarios.find(user => user.nombre === nombre)) return

    const newId = crearNewId('user')
    const contra = '777' // ES FIJA PARA TODOS LOS NUEVOS USERS HASTA QUE SE RESUELVA COMO TRATARLO
    const rol: UserRol = 'user' // SOLO USER // EL ADMIN NO SE DEBERIA PODER CREAR // ADMIN UNICO
    const newUsuario = { nombre, foto, id: newId, contra, rol }
    setUsuarios([...usuarios, newUsuario])
  }

  function eliminarUsuario (id: Id) {
    const newUsuarios = usuarios.filter(user => user.id !== id)
    setUsuarios(newUsuarios)
  }

  function editarUsuario (inputContra: string, inputFoto: string, id: Id) {
    const newUsuarios = usuarios.map(user => (
      user.id === id
        ? {...user, foto: inputFoto, contra: inputContra}
        : user
    ))

    setUsuarios(newUsuarios)
    const userActualizado = newUsuarios.find(user => user.id === id)
    setUsuario(userActualizado)
  }

  const value: UsuarioContextType = {
    usuario,
    logear,
    logout,
    usuarios,
    crearUsuario,
    eliminarUsuario,
    editarUsuario
  }

  return (
    <UsuarioContext.Provider value={value}>
      {children}
    </UsuarioContext.Provider>
  )
}