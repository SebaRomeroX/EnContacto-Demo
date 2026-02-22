import './Chat.css'
import { ListaSalas } from './ListaSalas'
import { Chat } from './sala/Chat'
import { CajaMensaje } from './CajaMensaje'
import { PestañaUsuario } from './usuario/PestañaUsuario'
import { useNavigate } from 'react-router'
import { RUTAS } from '../../constants/consts'
import { useEffect } from 'react'

export const PaginaChats = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  useEffect(() =>{
    if (!user) navigate(RUTAS.login)
  }, [])

  return (
    user &&
    <section>
      <section className='chats-header'>
        <h2>EnContacto</h2>
        <PestañaUsuario />
      </section>
      <section className='pantalla' >
        <ListaSalas />
        <Chat />
      </section>
      <CajaMensaje />
    </section>
  )
}