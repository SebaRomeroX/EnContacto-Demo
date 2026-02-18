import { createContext } from 'react'
import { USUARIOS } from '../mock'
import { useState } from 'react'

export const UsuarioContext = createContext()

function getUsuario (admin) {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : admin // para desarrollo
  // return JSON.parse(user)
}

export const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(USUARIOS)
  const [usuario, setUsuario] = useState(getUsuario(usuarios[3])) // temporal, desarrollo

    // REDUCER ??
  
  function logear (inputs) {
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
    setUsuario()
  }

  function crearUsuario (nombre, foto) {
    if (usuarios.find(user => user.nombre === nombre)) return
    console.log(foto)

    const ultimoId = usuarios[usuarios.length -1].id
    const newId = ultimoId + 1
    const newUsuario = { nombre, foto, id: newId, contra: '777', rol: 'user' }
    setUsuarios([...usuarios, newUsuario])
  }

  function eliminarUsuario (id) {
    const newUsuarios = usuarios.filter(user => user.id !== id)
    setUsuarios(newUsuarios)
  }

  function editarUsuario (inputContra, inputFoto, id) {
    const newUsuarios = usuarios.map(user => (
      user.id === id
        ? {...user, foto: inputFoto, contra: inputContra}
        : user
    ))

    setUsuarios(newUsuarios)
    const userActualizado = newUsuarios.find(user => user.id === id)
    setUsuario(userActualizado)
  }

  return (
    <UsuarioContext.Provider value={{
      usuario,
      logear,
      logout,
      usuarios,
      crearUsuario,
      eliminarUsuario,
      editarUsuario
    }}>
      {children}
    </UsuarioContext.Provider>
  )
}