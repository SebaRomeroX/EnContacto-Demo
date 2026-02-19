import { useContext, useState } from 'react'
import { UsuarioContext } from '../../../context/usuarioContext'
import { MenuUser } from './MenuUser'

export const PestañaUsuario = () => {
  const { usuario } = useContext(UsuarioContext)
  const [mostrar, setMostrar] = useState(false)

  return (
    <section className='pestaña-usuario-section'>
      <section className='info'>
        <img src={`https://unavatar.io/${usuario?.foto}`}/>
        <h4>{usuario?.nombre}</h4>  
      </section>
      { mostrar && usuario && <MenuUser usuario={usuario} /> }
      <button className='tip' onClick={() => setMostrar(!mostrar)}>{mostrar ? '▲' : '▼'} </button>
    </section>
  )
}