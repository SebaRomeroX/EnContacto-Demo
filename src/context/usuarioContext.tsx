import { createContext, type PropsWithChildren } from 'react'
import { USUARIOS, type Id, type UserRol, type Usuario } from '../mock'
import { useState } from 'react'

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
  return user ? JSON.parse(user) : admin // para desarrollo
  // return JSON.parse(user)
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
      console.log(newUsuario)
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

    //BOILERPLATE USER
    // let newId: Id
    let newId: Id
    do {
      newId = `user-${crypto.randomUUID()}`
    } while (USUARIOS.find(user => user.id == newId));

    //BOILERPLATES
    //CONTRASEÑA Y ROL => DATOS FIJOS
    const rol: UserRol = 'user'
    const newUsuario = { nombre, foto, id: newId, contra: '777', rol }
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