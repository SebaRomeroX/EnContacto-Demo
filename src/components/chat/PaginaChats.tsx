import './Chat.css'
import { ListaSalas } from './ListaSalas'
import { Chat } from './sala/Chat'
import { CajaMensaje } from './CajaMensaje'
import { PestañaUsuario } from './usuario/PestañaUsuario'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'


export const PaginaChats = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  useEffect(() => {
    !user && navigate('/login')
  }, [])

  return (
    user &&
    <section>
      <PestañaUsuario />
      <section className='pantalla' >
        <ListaSalas />
        <Chat />
      </section>
      <CajaMensaje />
    </section>
  )
}